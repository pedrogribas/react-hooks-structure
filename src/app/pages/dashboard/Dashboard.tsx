import { useCallback, useEffect, useState } from "react";
import {
  IListTask,
  TasksService,
} from "../../shared/services/api/tasks/TasksService";
import { ApiException } from "../../shared/services/api/ApiException";

export const Dashboard = () => {
  const [lista, setLista] = useState<IListTask[]>([]);
  useEffect(() => {
    TasksService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setLista(result);
      }
    });

    return () => {};
  }, []);

  const handleToggleComplete = useCallback(
    (id: number) => {
      const taskToUpdate = lista.find((task) => task.id === id);
      if (!taskToUpdate) return;
      TasksService.updateById(id, {
        ...taskToUpdate,
        isCompleted: !taskToUpdate.isCompleted,
      }).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista((oldList) => {
            return oldList.map((oldListTask) => {
              if (oldListTask.id === id) return result;
              return oldListTask;
            });
          });
        }
      });
    },
    [lista]
  );

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key == "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;
          const value = e.currentTarget.value;
          e.currentTarget.value = "";
          if (lista.some((listItem) => listItem.title === value)) return;
          TasksService.create({
            title: value,
            isCompleted: false,
          }).then((result) => {
            if (result instanceof ApiException) {
              alert(result.message);
            } else {
              setLista((oldList) => {
                return [...oldList, result];
              });
            }
          });
        }
      },
      [lista]
    );
  return (
    <div>
      <p>Lista</p>
      <input type="text" onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((listTask) => listTask.isCompleted).length}</p>
      <ol>
        {lista.map((listTask: IListTask) => {
          return (
            <li key={listTask.id}>
              <input
                type="checkbox"
                checked={listTask.isCompleted}
                onChange={() => handleToggleComplete(listTask.id)}
                name=""
                id=""
              />
              {listTask.title}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

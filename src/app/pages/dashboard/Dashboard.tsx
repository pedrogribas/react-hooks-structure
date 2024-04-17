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

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key == "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;
        const value = e.currentTarget.value;
        e.currentTarget.value = "";
        setLista((oldLista) => {
          if (oldLista.some((listItem) => listItem.title === value))
            return oldLista;

          return [
            ...oldLista,
            {
              title: value,
              isCompleted: false,
            },
          ];
        });
      }
    }, []);
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
                onChange={() => {
                  setLista((oldList) => {
                    return oldList.map((oldListTask) => {
                      const newIsCompleted =
                        oldListTask.title === listTask.title
                          ? !oldListTask.isCompleted
                          : oldListTask.isCompleted;
                      return {
                        ...oldListTask,
                        isCompleted: newIsCompleted,
                      };
                    });
                  });
                }}
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

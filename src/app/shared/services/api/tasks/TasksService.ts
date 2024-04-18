import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IListTask {
  id: number;
  title: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<IListTask[] | ApiException> => {
  try {
    const { data } = await Api().get("/tasks");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};
const getById = async (id: number): Promise<IListTask | ApiException> => {
  try {
    const { data } = await Api().get(`/tasks/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};
const create = async (
  dataToCreate: Omit<IListTask, "id">
): Promise<IListTask | ApiException> => {
  try {
    const { data } = await Api().post<any>("/tasks", dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao criar registo na API.");
  }
};
const updateById = async (
  id: number,
  dataToUpdate: IListTask
): Promise<IListTask | ApiException> => {
  try {
    const { data } = await Api().put(`/tasks/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(
      error.message || "Erro ao atualizar o registro no API."
    );
  }
};
const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`tasks/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao apagar na API.");
  }
};

export const TasksService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};

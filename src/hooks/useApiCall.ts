import { api } from "../services/api";

export  function useApiCall() {
  async function getUsers() {
    try {
      const response = await (await api.get("/")).data;

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getUsers,
  };
}

import { useState } from "react";
import { api } from "../services/api";
import { IListUsers, IUser } from "@/interfaces/user.type";
import { useQuery } from "@tanstack/react-query";

export function useApiCall() {
  const [listUsers, setListUsers] = useState<IUser[]>();

  const {isLoading,data} = useQuery({ queryKey: ['all-users'], queryFn: getUsers })
  async function getUsers() {
    try {
      const response = (await (await api.get("/?results=50")).data) as IListUsers;

      setListUsers(response.results)
      console.log(listUsers);

      return response
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getUsers,
    listUsers,
    isLoading,
    data
   
  };
}

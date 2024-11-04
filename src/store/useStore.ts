import { IUser } from "@/interfaces/user.type";
import { create } from "zustand";




interface IUserStore{
    user:IUser | null,
    setUser:(user:IUser)=>void
}


export const useStoreUser=create<IUserStore>((set)=>({
    user:null,
    setUser(user) {
        set({user})
    },
}))
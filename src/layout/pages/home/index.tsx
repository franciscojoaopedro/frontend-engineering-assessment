import ListViewUsers from "@/layout/views/view-table.tsx";
import {useApiCall} from "../../../hooks/useApiCall.ts";
import {useEffect} from "react";


export default function Home(){

    const {getUsers}=useApiCall()

    useEffect(()=>{
        getUsers()
    },[])

    return(
        <div className="w-full h-screen bg-slate-50" >
            <ListViewUsers/>
        </div>
    )
}
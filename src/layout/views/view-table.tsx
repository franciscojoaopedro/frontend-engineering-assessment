import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
 
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUser } from "@/interfaces/user.type";
import { Skeleton } from "@/components/ui/skeleton"
import { useApiCall } from "@/hooks/useApiCall";
import { useStoreUser } from "@/store/useStore";
import { useStoreModalUser } from "@/store/useModalUser";

interface IUsers {
    users:IUser[] |  []
}

export default function ListViewUsers({users}:IUsers) {


    const {isLoading}=useApiCall()
    const {setUser}=useStoreUser()
    const {onCloseAndOpen}=useStoreModalUser()
    const handlerSetUser=(userSelected:IUser)=>{
            setUser(userSelected)
            onCloseAndOpen()

    }
    
    const listSketon=[1,2,3,4,5,6]
  return (
    <Table  className="relative w-[800px]  h-[500px]   shadow-md bg-white rounded-sm ">
      
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Birth</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>

        {
            isLoading  && 
             listSketon.map((_,index)=>
            
            <TableRow key={index} >
                <TableCell><Skeleton className="w-full h-[20px] rounded-full" /></TableCell>
                <TableCell><Skeleton className="w-full h-[20px] rounded-full" /></TableCell>
                <TableCell><Skeleton className="w-full h-[20px] rounded-full" /></TableCell>
                <TableCell><Skeleton className="w-full h-[20px] rounded-full" /></TableCell>
               
                
            </TableRow>
            
            )
        }
        {users &&
            users?.map((user)=>(
                <TableRow key={user.id.value} >
                <TableCell className="font-medium">
                  {user.name.first + "" + user.name.last}
                </TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>
                  {
                    new Date(user.dob.date).toLocaleDateString()
                  }
                </TableCell>
      
                <TableCell className="flex justify-end items-center">
                  <Button onClick={()=>handlerSetUser(user)} >View</Button>
                </TableCell>
              </TableRow>
            ))
        }
     
        

      </TableBody>
    </Table>
  );
}

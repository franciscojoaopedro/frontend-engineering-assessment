import ListViewUsers from "@/layout/views/view-table.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useApiCall } from "@/hooks/useApiCall";
import ViewModalUser from "@/layout/views/view-modal";
import { useStoreModalUser } from "@/store/useModalUser";
import { useState, useEffect } from "react";
import { IUser } from "@/interfaces/user.type";
import { useFilterStore } from "@/store/useFilterUser";

export default function Home() {
  const { data } = useApiCall();
  const { isOpen, onCloseAndOpen } = useStoreModalUser();

  const [filter, setFilter] = useState<IUser[]>([]);
  const [query, setQuery] = useState<string>("");
 const {genderFilter,setGenderFilter}=useFilterStore()
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (data) {
      const filteredData = data.results.filter((item) => {
        const matchesQuery =
          item.name.first.toLowerCase().includes(query.toLowerCase()) ||
          item.nat.toLowerCase().includes(query.toLowerCase());
        const matchesGender =
          genderFilter === "all" || item.gender === genderFilter;
        return matchesQuery && matchesGender;
      });
      setFilter(filteredData);
      setCurrentPage(1);
    }
  }, [data, query, genderFilter]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const indexOfLastUser = currentPage * 10;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filter.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filter.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="w-full h-screen bg-slate-50 flex justify-center items-center">
        <div className="flex gap-3">
       

          <section>
            <div className="w-[800px] flex justify-center items-center gap-2 mb-3">
              <Input
                onChange={handleInputChange}
                value={query}
                placeholder="Search users"
              />
              <Select value={genderFilter}  onValueChange={(value)=>setGenderFilter(value)}   >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button onClick={() => setQuery("")}>Clear</Button>
            </div>
            <div className="flex flex-col gap-3">
             <div className="bg-white  shadow-lg p-2 rounded-lg" >
             <ListViewUsers users={currentUsers} />
             </div>

         
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" onClick={handlePrevious} />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  {totalPages > 5 && <PaginationEllipsis />}
                  <PaginationItem>
                    <PaginationNext href="#" onClick={handleNext} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </section>
        </div>
      </div>
      <ViewModalUser isOpen={isOpen} onClose={onCloseAndOpen} />
    </>
  );
}

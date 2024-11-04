import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useStoreUser } from "@/store/useStore";
import {
  AtSign,
  Cake,
  Earth,
  MapPin,
  MapPinHouse,
  Phone,
  Share2,
} from "lucide-react";

interface propsModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewModalUser({ isOpen, onClose }: propsModal) {
  const { user } = useStoreUser();

  return (
    <>
      {user && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>User Information</DialogTitle>
              <DialogDescription>
                View the complete details of the user.
              </DialogDescription>
            </DialogHeader>

            <div className="p-5 mt-4">
              <div className="mt-1  flex justify-center items-center">
                <img
                  src={`${user.picture.large}`}
                  alt="User profile"
                  className="w-64 h-64 rounded-lg object-cover shadow-lg"
                />
              </div>

              <div className="mt-3 flex  w-full justify-center items-center gap-4 ">
                <div className="mt-3 flex flex-col  justify-start items-center">
                  <Label className="text-2xl text-gray-700">{`${user.name.first} ${user.name.last}`}</Label>
                  <p className="text-start">{user.gender}</p>
                </div>
                <Button className="">
                  <a
                    href="https://example.com/user-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 />
                  </a>
                </Button>
              </div>

              <div className="w-full flex justify-center items-center m-3">
                <div className=" w-full flex items-center gap-3  shadow-md rounded-sm p-3">
                  <ul className="w-full gap-3">
                    <li className="text-sm text-gray-700 flex items-center gap-3">
                      <AtSign size={16} />
                      {`${user.email}`}
                    </li>
                    <li className="text-sm text-gray-700 flex items-center gap-3">
                      <Earth size={16} />
                      {`${user.nat} `}
                    </li>

                    <li className="text-sm text-gray-700 flex items-center gap-3">
                      <Phone size={16} />
                      {`${user.cell} `}
                    </li>
                    <li className="text-sm text-gray-700 flex items-center gap-3">
                      <Cake size={16} />
                      {new Date(user.dob.date).toLocaleDateString()}
                    </li>
                    <li className="text-sm text-gray-700 flex items-center gap-3">
                      <MapPinHouse size={16} />
                      {`${user.id.value}`}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full flex justify-center items-center m-3">
                <div className=" w-full flex items-center gap-3  shadow-md rounded-sm p-3">
                  <ul className="w-full gap-3">
                    <label className="text-sm font-medium">Address</label>
                    <li className="text-sm text-gray-700 flex items-center gap-3">
                      <Earth size={16} />
                      {user.location.country}
                    </li>
                    <li className="text-sm text-gray-700 flex items-center gap-3">
                      <MapPin size={16} />
                      {`${user.location.city} / ${user.location.state}`}
                    </li>
                    <li className="text-sm text-gray-700 flex items-center gap-3">
                      <MapPinHouse size={16} />
                      {`${user.location.street.name} nº ${user.location.street.number}`}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

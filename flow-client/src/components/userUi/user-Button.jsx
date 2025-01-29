import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Loader, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLogout from "@/hooks/useLogout";

const UserButton = () => {
  const { data, isLoading: isUserLoading } = useCurrentUser();
  const { mutate: logout,isError,isLoading: isLoggingOut} = useLogout(); // Use the logout function from the hook

  if (isUserLoading || !data) {
    return (
      <div className="size-10 rounded-full flex items-center justify-center bg-neutral-200 border border-neutral-300">
        <Loader className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Accessing user data correctly
  const { name, email, avatarUrl } = data.date;
  console.log(name);
  console.log(email);

  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email?.charAt(0).toUpperCase() ?? "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition border border-neutral-300">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-60"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <Avatar className="size-[52px]  border border-neutral-300">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900">
              {name || "user"}
            </p>
            <p className="text-xs text-neutral-500">{email || "email"}</p>
          </div>
          <Separator className="mb-1"></Separator>
          <DropdownMenuItem
            onClick={() => logout()}
            className="h-10 flex items-center justify-center text-amber-700 font-medium cursor-pointer"
          >
            {" "}
            {isLoggingOut ? (
              <div>Logging out...</div>
            ) : isError ? (
              <div>Error logging out. Please try again.</div>
            ) : (
              <>
                <LogOut className="size-4 mr-2" />
                Logout
              </>
            )}
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;

import {
  Cloud,
  CreditCard,
  GalleryVerticalEnd,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";


export function DropdownMenuF() {
  const { logout } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>JK</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={'/dashboard'}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
              <DropdownMenuShortcut>ctrl+D</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={'/dashboard'}>
            <DropdownMenuItem>
              <GalleryVerticalEnd className="mr-2 h-4 w-4" />
              <span>All Posts</span>
              <DropdownMenuShortcut>ctrl+P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href={'/dashboard/new-post'}>
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>New Post</span>
              <DropdownMenuShortcut>ctrl+P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <button onClick={() => logout()}>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

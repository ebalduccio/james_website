import { SideNavItems } from "@/types/types";
import { PlusIcon } from "lucide-react";

export const SIDENAV_ITEMS:SideNavItems[]=[
    {
        title: 'All Posts',
        href: '/dashboard/all-posts',
    },
    {
        title: 'New Post',
        href:  '/dashboard/new-post',
        icon: <PlusIcon size={20}/>
    },
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Biography',
        href: '/biography'
    },
    {
        title: 'Investor Acumen',
        href: '/investoracumen'
    },
    {
        title: 'Publications',
        href: '/publications'
    },
    {
        title: 'Social Media',
        href: '/socialmedia'
    },
    {
        title: 'Personal Blog',
        href: '/personalblog'
    },
]
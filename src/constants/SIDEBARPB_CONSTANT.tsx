import { SideBarPbItems } from "@/types/types";
import { IoHome } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export const SIDEBARPB:SideBarPbItems[]=[
    {
        title: 'Main Feed',
        href: '/personalblog',
        icon: <IoHome size={20} />
    },
    {
        title: 'Search',
        href:  '/personalblog/search',
        icon: <IoIosSearch size={20} />
    },
    {
        title: 'Preferences',
        href: '/personalblog/preferences',
        icon: <IoSettingsOutline size={20} />
    },
    {
        title: 'Topics',
        href: '/personalblog/topics',
        subMenu: true,
        subMenuItem: [
            {title: 'Topic 1', href:'/topic_1'},
            {title: 'Topic 2', href:'/topic_2'}
        ]
    },
    {
        title: 'Another',
        href: '/personalblog/another',
        subMenu: true,
        subMenuItem: [
            {title: 'Another 1', href:'/another_1'},
            {title: 'Another 2', href:'/another_2'}
        ]
    },
]
export const SIDEBARP:SideBarPbItems[]=[
    {
        title: 'Main Feed',
        href: '/publications',
        icon: <IoHome size={20} />
    },
    {
        title: 'Investor Acumen',
        href:  '/publications/investoracumen',
    },
    {
        title: 'Seeking Alpha',
        href: '/publications/seekingalpha',
    },
    {
        title: 'Investing',
        href: '/publications/investing',
    },
    {
        title: 'TheStreet',
        href: '/publications/thestreet',
    },
]

export const SIDEBARSM:SideBarPbItems[]=[
    {
        title: 'Main Feed',
        href: '/publications',
        icon: <IoHome size={20} />
    },
    {
        title: 'Facebook',
        href:  '/socialmedia/facebook',
    },
    {
        title: 'X',
        href: '/socialmedia/x',
    },
    {
        title: 'Linkedin',
        href: '/socialmedia/linkedin',
    },
    {
        title: 'Instagram',
        href: '/socialmedia/instagram',
    },
]
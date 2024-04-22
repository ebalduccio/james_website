export type SideNavItems = {
    title: string,
    href: string,
    icon?: JSX.Element,
    subMenu?: boolean,
    subMenuItem?: SideNavItems[];
}
export type SideBarPbItems = {
    title: string,
    href: string,
    icon?: JSX.Element,
    subMenu?: boolean,
    subMenuItem?: SideBarPbItems[];
}

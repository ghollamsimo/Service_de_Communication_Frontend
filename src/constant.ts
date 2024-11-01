export interface MenuItem {
    title: string;
    icon: JSX.Element;
    gap?: boolean;
}

export interface NotificationDropdownProps {
    isOpen: boolean;
    toggleDropdown: () => void;
}

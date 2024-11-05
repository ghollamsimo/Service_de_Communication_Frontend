export interface MenuItem {
    title: string;
    icon: JSX.Element;
    gap?: boolean;
}

export interface NotificationDropdownProps {
    isOpen: boolean;
    toggleDropdown: () => void;
}

export interface FriendsProps {
    onFriendClick: () => void;
}

export interface Contacts{
    image: string | null;
    name: string;
    message: string;
    isOnline: boolean;
}
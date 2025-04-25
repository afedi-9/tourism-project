import { BookAIcon, FileIcon, Home, MessageCircleIcon, Pencil, PlusCircle, User } from "lucide-react";

export default{
    NAVLINKS: [
        {
            name: "Overview",
            path: "/dashboard",
            icon: Home
        },
        // {
        //     name: "Create Tour",
        //     path: "/dashboard/create-tour",
        //     icon: BookAIcon,
        // },
        {
            name: "Vendor Ads",
            path: "/dashboard/tours",
            icon: FileIcon,
        },
        {
            name: "Manage Bookings",
            path: "/dashboard/bookings",
            icon: BookAIcon,
        },
        {
            name: "Update Tour",
            path: "/dashboard/update/:id",
            icon: Pencil,
        },
        {
            name: "Message",
            path: "/dashboard/message",
            icon: MessageCircleIcon,
        },
        {
            name: "Profile",
            path: "/dashboard/operator-profile",
            icon: User,
        },
    ]
}
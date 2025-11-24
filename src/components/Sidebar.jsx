import { Link } from "react-router";

import {
    LayoutDashboard,
    Users,
    ChessQueen,
    TrophyIcon,
    CircleUserRound,
    Settings,
} from "lucide-react";

export const Sidebar = () => {
    const upperMenuItems = [
        { name: "Home", icon: <LayoutDashboard />, path: "/" },
        { name: "Following", icon: <Users />, path: "/following" },
        { name: "Roast Arena", icon: <ChessQueen />, path: "/roast-arena" },
        { name: "Leaderboard", icon: <TrophyIcon />, path: "/leaderboard" },
    ];
    const lowerMenuItems = [
        { name: "Profile", icon: <CircleUserRound />, path: "/profile" },
        { name: "Settings", icon: <Settings />, path: "/settings" },
        { name: "Theme Toggle", icon: "", path: "" },
    ];

    return (
        <div className="flex flex-col justify-between w-full p-8 list-none">
            <div className="flex flex-col gap-4">
                {upperMenuItems.map((item) => (
                    <Link to={item.path}>
                        <li
                            key={item.name}
                            className="flex gap-2 cursor-pointer hover:bg-[#F4F4F8]/50 p-5 rounded-full"
                        >
                            {item.icon} {item.name}
                        </li>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                {lowerMenuItems.map((item) => (
                    <Link to={item.path}>
                        <li
                            key={item.name}
                            className="flex gap-2 cursor-pointer hover:bg-[#F4F4F8]/50 p-5 rounded-full"
                        >
                            {item.icon} {item.name}
                        </li>
                    </Link>
                ))}
            </div>
        </div>
    );
};

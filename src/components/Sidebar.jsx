import { LayoutDashboard, Users, ChessQueen, TrophyIcon, CircleUserRound } from "lucide-react";

export const Sidebar = () => {
    const upperMenuItems = [
        { name: "Home", icon: <LayoutDashboard /> },
        { name: "Following", icon: <Users /> },
        { name: "Roast Arena", icon: <ChessQueen /> },
        { name: "Leaderboard", icon: <TrophyIcon /> },
    ];
    const lowerMenuItems = [
        {name: "Profile", icon: <CircleUserRound />}, 
        {name: "Theme Toggle", icon: ""},
    ];

    return (
        <div className="flex flex-col justify-between w-full p-8 list-none">
            <div className="flex flex-col gap-5">
                {upperMenuItems.map((item) => (
                    <li key={item.name} className="flex gap-2 cursor-pointer hover:bg-[#F4F4F8]/50 p-5 rounded-full">
                        {item.icon} {item.name}
                    </li>
                ))}
            </div>
            <div className="flex flex-col gap-20">
                {lowerMenuItems.map((item) => (
                    <li key={item.name} className="flex gap-2 cursor-pointer hover:bg-[#F4F4F8]/50 p-5 rounded-full">{item.icon} {item.name}</li>
                ))}
            </div>
        </div>
    );
};

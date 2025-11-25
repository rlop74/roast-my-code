import { useFollowers } from "../stores/followers-store";
import { fetchData } from "../utils/FollowersUtils";

export const Following = () => {
    fetchData("https://dummyjson.com/users");
    const followers = useFollowers((state) => state.followers);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto */}
            {followers.map((follower) => (
                <div
                    key={follower.id}
                    className="border rounded-xl p-6 flex items-center gap-6"
                    // bg-surface border border-border-dim rounded-xl p-6 flex items-center gap-6
                >
                    {/* Avatar */}
                    <div className="shrink-0">
                        <img
                            src={follower.image || "/default-avatar.png"}
                            alt={follower.firstName}
                            className="w-20 h-20 rounded-full border-4 border-[#9CA3AF]/20"
                            // w-20 h-20 rounded-full object-cover border-4 border-accent/20
                        />
                    </div>

                    {/* Main info + stats */}
                    <div className="flex-1 grid grid-cols-2 gap-8">
                        {/* Left column – Name & handle */}
                        <div>
                            <h3 className="text-xl font-bold text-primary">
                                {/* text-xl font-bold text-primary */}
                                {follower.firstName} {follower.lastName}
                            </h3>
                             <p className=""> {/* text-secondary */}
                                @{follower.username || follower.password}
                            </p>
                        </div>

                        {/* Right column – Stats */}
                        <div className="text-right space-y-1">
                            <p className="font-semibold"> {/* "text-up font-semibold" */}
                                {follower.roasters || follower.age} Roasters
                            </p>
                            <p className="font-semibold"> {/* "text-down font-semibold" */}
                                {follower.roasting || follower.age} Roasting
                            </p>
                            <p className="font-bold"> {/* "text-accent font-semibold" */}
                                {follower.aura || follower.height} Aura
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
import { useFollowers } from "../stores/followers-store";

export const Leaderboard = () => {
    const followers = useFollowers((state) => state.followers);
    const leaderboardItems = [
        "Rank",
        "Warriors",
        "Karma",
        "Upvote",
        "Downvote",
        "Title",
    ];

    return (
        <div className="p-5">
            <h1>Leaderboard</h1>
            <div className="border-1 h-[400px] rounded-xl p-5 overflow-y-auto">
                <div className="flex list-none">
                    {leaderboardItems.map((item) => (
                        <li key={item} className="flex-1">
                            {item}
                        </li>
                    ))}
                </div>
                <div className="">
                    {followers.map((user) => (
                        <li
                            key={user.id}
                            className="list-none border-b border-gray-500/50 pt-8 pb-8 flex"
                        >
                            <div className="flex-1">{user.id}</div>
                            <div className="flex-1">
                                {user.firstName} {user.lastName}
                            </div>
                            <div className="flex-1">
                                {user.age}
                            </div>
                            <div className="flex-1">
                                {user.height}
                            </div>
                            <div className="flex-1">
                                {user.weight}
                            </div>
                            <div className="flex-1">
                                {user.password}
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

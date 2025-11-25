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

    const leaderboardCriteria = [
        {
            action: "Someone clicks LEGENDARY on your submission",
            karmaChange: "+10",
            reason: "You wrote something so cursed it’s beautiful",
        },
        {
            action: "Someone clicks CURSED on your submission",
            karmaChange: "-15",
            reason: "You hurt the internet. Pain must have a cost",
        },
        {
            action: "Your comment/roast gets upvoted",
            karmaChange: "+5 per upvote",
            reason: "You delivered a surgical strike",
        },
        {
            action: "Your comment gets downvoted",
            karmaChange: "-3 per downvote",
            reason: "Ratio’d. Go sit in the corner",
        },
        {
            action: "Your submission hits the front page (#1–3) for >1 hour",
            karmaChange: "+50 bonus",
            reason: "You broke the leaderboard",
        },
        {
            action: "You get crowned “Today’s Arsonist” (rank 1 daily)",
            karmaChange: "+200 bonus",
            reason: "Eternal glory (until tomorrow)",
        },
        {
            action: "You submit anonymously",
            karmaChange: "×0.5 multiplier on all gains",
            reason: "Cowards get half credit",
        },
        {
            action: "You pay $5 to highlight your submission",
            karmaChange: "+100 fake karma (shown in red)",
            reason: "'Pay-to-win clown' badge appears next to your name",
        },
    ];

    return (
        <div className="p-5">
            <h1>Leaderboard</h1>
            <div className="border-1 h-[400px] rounded-xl p-5 overflow-y-auto">
                <div className="flex list-none border-b">
                    {leaderboardItems.map((item) => (
                        <li key={item} className="flex-1 font-bold text-lg">
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
                            <div className="flex-1">{user.age}</div>
                            <div className="flex-1">{user.height}</div>
                            <div className="flex-1">{user.weight}</div>
                            <div className="flex-1">{user.password}</div>
                        </li>
                    ))}
                </div>
            </div>
            {/* <div className="p-10 border-1 mt-10 rounded-xl"> */}
                <table className="w-full mt-5 rounded-xl text-center border-separate border-spacing-3">
                    <thead>
                        <tr className="text-lg">
                            <th>Action</th>
                            <th>Karma Change</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardCriteria.map((criteria) => (
                            <tr>
                                <td>{criteria.action}</td>
                                <td>{criteria.karmaChange}</td>
                                <td>{criteria.reason}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        // </div>
    );
};

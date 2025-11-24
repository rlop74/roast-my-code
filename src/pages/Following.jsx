import { useFollowers } from "../stores/followers-store";
import { fetchData } from "../utils/FollowersUtils";

export const Following = () => {
    fetchData("https://dummyjson.com/users");
    const followers = useFollowers((state) => state.followers);

    return (
        <>
            {followers.map((follower) => (
                <li key={follower.id} className="border-1 p-5">
                    <img src={follower.image} />
                    {follower.firstName} {follower.lastName}
                </li>
            ))}
        </>
    );
};

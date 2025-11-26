import { userProfile } from "../models/user-profile";

export const Profile = () => {
    return (
        <div>
            <div className="flex flex-col p-20 pb-0 items-center gap-8">
                <img
                    src={userProfile.avatar}
                    className="w-40 h-40 rounded-full border-4"
                />
                <div className="text-3xl">{userProfile.rank}</div>
                <div>Job Title: {userProfile.job_title}</div>
            </div>
            <div className="grid grid-cols-2 mt-10 p-5 max-w-2xl mx-auto gap-20">
                <div className="flex flex-col text-xl gap-10">
                    <h3>Name: {userProfile.first_name} {userProfile.last_name}</h3>
                    <p>Email: {userProfile.email}</p>
                    <p>Address: {userProfile.address}</p>
                    <p>City: {userProfile.city}</p>
                    <p>State: {userProfile.state}</p>
                    <p>Role: {userProfile.role}</p>
                </div>
                <div className="flex flex-col text-xl gap-10">
                    <p>Streak: {userProfile.streak}</p>
                    <p>Aura: {userProfile.aura}</p>
                    <p>Roasters: {userProfile.roasters}</p>
                    <p>Roasting: {userProfile.roasting}</p>
                    <p>Total Upvotes: {userProfile.total_upvotes}</p>
                    <p>Total Downvotes: {userProfile.total_downvotes}</p>
                </div>
            </div>
        </div>
    );
};

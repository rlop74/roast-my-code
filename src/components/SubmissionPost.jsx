import image from "../assets/react.svg";

export const SubmissionPost = () => {
    return (
        <div className="p-5">
            <div className="flex gap-5 p-5">
                <img src={image} alt="" />
                <div className="flex flex-col">
                    <p>@username</p>
                    <p className="font-bold text-lg">TITLE OF THE POST</p>
                    <p>Definition of the post</p>
                </div>
            </div>
            <div className="border-1 p-30 m-10 mb-0 rounded-xl">
                {/* add monaco editor for in-browser code editor */}
            </div>
            <div className="flex gap-10 mt-2 m-10">
                <p>upvotes</p>
                <p>downvotes</p>
            </div>
            <div>
                <p>comments</p>
            </div>
            <hr className="mt-20 text-gray-500/50"/>
        </div>
    );
};

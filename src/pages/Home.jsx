import { AllSubmissions } from "../components/AllSubmissions";
import { SubmissionPost } from "../components/SubmissionPost";

export const Home = () => {
    return (
        <div className="p-5">
            <h1>Today's Freshest Garbage</h1>
            {/* <AllSubmissions /> */}
            <SubmissionPost />
            <SubmissionPost />
            <SubmissionPost />
            <SubmissionPost />
        </div>
    );
};

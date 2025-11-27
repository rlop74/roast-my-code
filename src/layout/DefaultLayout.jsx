import { useState } from "react";

import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router";
import { SubmissionPostDialog } from "../components/SubmissionPostDialog";

export const DefaultLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen">
            <Navbar setIsOpen={setIsOpen} />
            <SubmissionPostDialog isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex flex-1 overflow-hidden">
                {" "}
                {/* overflows for independent scrolling for sidebar and main */}
                <aside className="flex w-[15%] border-r overflow-y-auto">
                    <Sidebar />
                </aside>
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

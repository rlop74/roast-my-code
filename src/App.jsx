import { BrowserRouter, Routes, Route } from "react-router";

import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Following } from "./pages/Following";
import { RoastArena } from "./pages/RoastArena";
import { Leaderboard } from "./pages/Leaderboard";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";

import { fetchData } from "./utils/FollowersUtils";

function App() {
    fetchData("https://dummyjson.com/users");

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Following />} />
                    <Route path="/roast-arena" element={<RoastArena />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

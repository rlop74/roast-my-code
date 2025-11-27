import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { EyeClosed, Eye } from "lucide-react";

export const LoginDialog = ({ isLoginOpen, setIsLoginOpen }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [viewPassword, setViewPassword] = useState(false);

    const login = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        };
        await fetch("http://localhost:3000/login", options)
            .then((response) => response.json())
            .then((data) => console.log(data));
    };

    return (
        <Dialog open={isLoginOpen}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <DialogContentText className="flex flex-col gap-2">
                    <input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border-2 border-gray-300 p-2 rounded-lg"
                    />
                    <div className="flex">
                        <input
                            type={viewPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                        />
                        <button
                            onMouseDown={() => setViewPassword(true)}
                            onMouseUp={() => setViewPassword(false)}
                            onMouseLeave={() => setViewPassword(false)}
                        >
                            {viewPassword ? <Eye /> : <EyeClosed />}
                        </button>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button
                    onClick={() => setIsLoginOpen(false)}
                    className="border-1 p-2 rounded-lg cursor-pointer hover:bg-black/30"
                >
                    Cancel
                </button>
                <button
                    onClick={login}
                    className="border-1 p-2 rounded-lg cursor-pointer hover:bg-black/30"
                >
                    Login
                </button>
            </DialogActions>
        </Dialog>
    );
};

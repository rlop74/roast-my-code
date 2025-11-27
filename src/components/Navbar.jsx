export const Navbar = ({setIsOpen}) => {
    return (
        <div className="flex justify-between p-5 border-b">
            <h1>ROASTMYCODE.LIVE</h1>
            <div className="flex gap-5">
                <button onClick={() => setIsOpen(true)}>Submit Code</button>
                <button>Login</button>
            </div>
        </div>
    );
};

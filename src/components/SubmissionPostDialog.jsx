import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const SubmissionPostDialog = ({ isOpen, setIsOpen }) => {
    if (!isOpen) {
        return null; // Don't render if not open
    }

    return (
        <Dialog open={isOpen}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                </DialogContentText>
                
            </DialogContent>
            <DialogActions>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button>
                    Subscribe
                </button>
            </DialogActions>
        </Dialog>
    );
};

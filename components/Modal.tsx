import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}
export default function Modal(props: Props): JSX.Element {
  const [otp, setOtp] = React.useState("");

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body2">
              Please Enter OTP to complete login process
            </Typography>
            <Typography variant="subtitle2">
              (555555 for demo purposes)
            </Typography>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter OTP"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setOtp(event.target.value);
            }}
            error={otp !== "555555"}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleSubmit} disabled={otp !== "555555"}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

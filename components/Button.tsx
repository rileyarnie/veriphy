import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

const MyButton: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <Button variant="outlined" color={props.color}>
      {props.children}
    </Button>
  );
};

export default MyButton;

import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#ef4c4a",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#ef4c4a",
    border: "1px solid #ef4c4a",
    outline: "0px",
    boxShadow: "none",
  },
});

const CustomBtnComponent = ({
  children,
  onClick,
  sx,
  disabled,
  variant,
  type,
  fullWidth,
}) => {
  return (
    <CustomButton
      onClick={onClick}
      sx={sx}
      disabled={disabled}
      variant={variant}
      type={type}
      fullWidth={fullWidth}>
      {children}
    </CustomButton>
  );
};

export default CustomBtnComponent;

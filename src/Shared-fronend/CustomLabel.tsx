import { Typography, TypographyProps } from "@mui/material";

import Colors from "./Colors";

interface CustomLabelProps {
  label?: string;
  required?: boolean;
}

export default function CustomLabel({
  label,
  required,
  children,
  ...props
}: CustomLabelProps & TypographyProps) {
  if (!label && !children) {
    return null;
  }
  return (
    <Typography
      variant="body1"
      mb={0.5}
      color={Colors.BLACK}
      textAlign="left"
      fontFamily={"'Codec pro', sans-serif"}
      {...props}
    >
      {label}
      {required && (
        <Typography
          fontFamily={"'Codec pro', sans-serif"}
          component="span"
          color={Colors.SECONDARY}
        >
          *
        </Typography>
      )}
      {children}
    </Typography>
  );
}

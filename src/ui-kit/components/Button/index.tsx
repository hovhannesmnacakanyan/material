import { Button as MUIButton, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MUIButton)`
  &:hover {
    scale: 1.1;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} disableRipple />;
};

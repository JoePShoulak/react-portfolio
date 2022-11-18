import Typography from "@mui/material/Typography";
import { NavLink as RawLink } from "react-router-dom";

const inactiveStyle = {
  color: "#ffffff",
  textDecoration: "none",
};

const activeStyle = {
  color: "#ffffff",
  textDecoration: "underline",
};

function Link({ path, text, variant = "h6", neverActive = false }) {
  return (
    <Typography variant={variant} sx={{ flexGrow: 1 }}>
      <RawLink
        to={path}
        style={({ isActive }) =>
          isActive && !neverActive ? activeStyle : inactiveStyle
        }
      >
        {text}
      </RawLink>
    </Typography>
  );
}

export default Link;

import Typography from "@mui/material/Typography";
import { Link as RawLink } from "react-router-dom";

function Link({ path, text, variant = "h6" }) {
  return (
    <Typography variant={variant} sx={{ flexGrow: 1 }}>
      <RawLink to={path} style={{ color: "#ffffff", textDecoration: "none" }}>
        {text}
      </RawLink>
    </Typography>
  );
}

export default Link;

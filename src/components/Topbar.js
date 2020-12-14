import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import "./topBar.css";
import { useHistory } from "react-router-dom";

export default function PrimarySearchAppBar() {
  let history = useHistory();

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#00074F" }} position="static">
        <Toolbar onClick={() => history.push("/home")}>
          <IconButton edge="start" color="inherit">
            <img
              alt="dio cane"
              className="imgTopBar"
              src="https://www.lowcostguru.com/media/posts/32/responsive/lufthansa-logo-xs.jpg"
            />
          </IconButton>
          <Typography variant="h5" noWrap>
            LufthSamuel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

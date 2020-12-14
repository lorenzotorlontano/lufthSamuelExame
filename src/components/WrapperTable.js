import React from "react";
import Tabs from "../components/Tabs";
import Grid from "@material-ui/core/Grid";

function WrapperTable() {
  return (
    <Grid item md={6} xs={4}>
      <Tabs />
    </Grid>
  );
}

export default WrapperTable;

import React from "react";
import "./home.css";
import WrapperTable from "../../components/WrapperTable";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <Grid container className="wrapper">
      <WrapperTable />
    </Grid>
  );
}

export default Home;

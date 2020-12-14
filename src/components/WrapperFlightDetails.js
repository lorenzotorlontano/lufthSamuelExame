import React from "react";
import Grid from "@material-ui/core/Grid";
import Progress from "../components/Progress";
import "../pages/flightDetails.css";
import DetailsTextGridWrapper from "../components/DetailsTextGridWrapper";
function WrapperFlightDetails({ flightDetails }) {
  return (
    <Grid container>
      <Grid className="wrapperItemGridDetailsSectionFlight" item md={12}>
        <Grid
          className="containerSectionFlight"
          style={{ margin: "40px" }}
          item
          md={8}
        >
          <Grid
            className="titleItemGridFlight"
            style={{
              marginTop: "20px",
              marginBottom: "10px",
            }}
            item
            md={6}
          >
            VOLO
          </Grid>
          <Grid className="gridProgressItem" item md={6}>
            <Progress />
          </Grid>
          <DetailsTextGridWrapper flightDetails={flightDetails} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WrapperFlightDetails;

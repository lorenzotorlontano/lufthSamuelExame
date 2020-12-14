import React from "react";
import Grid from "@material-ui/core/Grid";

function DetailsTextGridWrapper({ flightDetails }) {
  return (
    <Grid
      style={{ marginTop: "40px", marginRight: "30px" }}
      item
      md={12}
      className="itemFlightInformation"
    >
      <Grid className="itemTextGrid" item md={12} xs={10}>
        id : {flightDetails?.id}
      </Grid>
      <Grid item md={12} xs={10}>
        areoporto di arrivo : {flightDetails?.arrivalAirport}
      </Grid>
      <Grid item md={12} xs={10}>
        orario di arrivo : {flightDetails?.arrivalTime}
      </Grid>
      <Grid item md={12} xs={10}>
        società : {flightDetails?.company}
      </Grid>
      <Grid item md={12} xs={10}>
        areoporto di partenza : {flightDetails?.departureAirport}
      </Grid>
      <Grid item md={12} xs={10}>
        durata del volo : {flightDetails?.duration}
      </Grid>
      <Grid item md={12} xs={10}>
        codice del volo : {flightDetails?.title}
      </Grid>
    </Grid>
  );
}

export default DetailsTextGridWrapper;

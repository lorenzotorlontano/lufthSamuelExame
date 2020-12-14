import React from "react";
import Grid from "@material-ui/core/Grid";

function FlightsInformationListGrid({ handleDetailsFlight, val }) {
  return (
    <Grid
      item
      md={12}
      xs={12}
      onClick={() => handleDetailsFlight(val.id)}
      className="itemContainer"
    >
      <span>durata del volo : {val.duration}</span>
      <span>società : {val.company}</span>
      <span>ID : {val.id}</span>
      <span>codice del volo : {val.title}</span>
    </Grid>
  );
}

export default FlightsInformationListGrid;

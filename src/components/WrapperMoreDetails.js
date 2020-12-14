import React from "react";
import Grid from "@material-ui/core/Grid";
import "../pages/flightsList.css";
import ButtonComponents from "../components/Button";

function WrapperMoreDetails({ val, handleShowLess }) {
  return (
    <>
      <Grid item md={12} xs={12} className="itemDetailsMore">
        <span>areoporto di partenza : {val.departureAirport}</span>
        <span>orario di partenza : {val.departureTime}</span>
        <span>areoporto di arrivo : {val.arrivalAirport}</span>
        <span>orario di arrivo : {val.arrivalTime}</span>
      </Grid>
      <Grid className="buttonLessDetailsItems" item md={12} xs={12}>
        <ButtonComponents
          func={() => handleShowLess(val.id)}
          val="mostra meno"
          size="small"
        />
      </Grid>
    </>
  );
}

export default WrapperMoreDetails;

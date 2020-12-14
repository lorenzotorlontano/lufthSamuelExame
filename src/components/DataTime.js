import React from "react";
import Calendar from "../components/Calendar";
import Grid from "@material-ui/core/Grid";
import ButtonComponents from "../components/Button";
import "./dataTime.css";
function DataTime({
  handleFlightBrowse,
  checked,
  fromDataTimeValue,
  setToDataTimeValue,
  toDataTimeValue,
  setFromDataTimeValue,
}) {
  const labelFromDataTime = "Data di partenza";
  const labelToDataTime = "Data di ritorno";

  return (
    <Grid container>
      <Grid item md={5} xs={12}>
        <Calendar
          value={fromDataTimeValue}
          setValue={setFromDataTimeValue}
          label={labelFromDataTime}
        />
      </Grid>
      <Grid item md={5} xs={12}>
        {!checked ? (
          <Calendar
            toDataTimeValue={toDataTimeValue}
            setValue={setToDataTimeValue}
            label={labelToDataTime}
          />
        ) : null}
      </Grid>
      <Grid className="wrapperButtonSearchFlights" item md={2} xs={12}>
        <ButtonComponents
          func={handleFlightBrowse}
          size={"small"}
          val={"cerca voli"}
        />
      </Grid>
    </Grid>
  );
}

export default DataTime;

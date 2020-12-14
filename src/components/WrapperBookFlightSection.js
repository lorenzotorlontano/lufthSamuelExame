import React from "react";
import Grid from "@material-ui/core/Grid";
import Airports from "./Airports/Airports";
import DataTime from "../components/DataTime";
import WrapperButton from "../components/WrapperButton";
import "./bookFlightsSection.css";
import ToastBar from "../components/ToastBar";

function WrapperBookFlightSection({
  choosenValueFrom,
  setChoosenValueFrom,
  checkToast,
  choosenValueTo,
  setChoosenValueTo,
  showTable,
  setShowTable,
  handleFlightBrowse,
  fromDataTimeValue,
  setToDataTimeValue,
  toDataTimeValue,
  setFromDataTimeValue,
  checked,
  setChecked,
}) {
  return (
    <Grid container>
      {checkToast && showTable ? <ToastBar /> : null}
      <Grid item md={12}>
        <Airports
          choosenValueFrom={choosenValueFrom}
          setChoosenValueFrom={setChoosenValueFrom}
          choosenValueTo={choosenValueTo}
          setChoosenValueTo={setChoosenValueTo}
          showTable={showTable}
          setShowTable={setShowTable}
        />
      </Grid>
      {!showTable ? null : (
        <>
          <Grid className="wrapperContainerButton" item md={12}>
            <WrapperButton checked={checked} setChecked={setChecked} />
          </Grid>
          <Grid item md={12}>
            <DataTime
              handleFlightBrowse={handleFlightBrowse}
              fromDataTimeValue={fromDataTimeValue}
              setToDataTimeValue={setToDataTimeValue}
              toDataTimeValue={toDataTimeValue}
              setFromDataTimeValue={setFromDataTimeValue}
              checked={checked}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default WrapperBookFlightSection;

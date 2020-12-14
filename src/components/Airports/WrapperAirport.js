import React from "react";
import Grid from "@material-ui/core/Grid";
import AutoComplete from "../AutoComplete";
import "./airports.css";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import ButtonComponents from "../Button";

function WrapperAirport({
  setChoosenValueFrom,
  valueFrom,
  labelFrom,
  handleSwitch,
  setChoosenValueTo,
  choosenValueTo,
  choosenValueFrom,
  valueTo,
  labelTo,
  setShowTable,
  showTable,
  handleSetter,
}) {
  return (
    <Grid className="itemWrapperAutoComplete" container>
      <Grid item md={4} xs={12}>
        <AutoComplete
          setShowTable={setShowTable}
          setValue={setChoosenValueFrom}
          value={valueFrom}
          defaultValue={choosenValueFrom}
          label={labelFrom}
        />
      </Grid>
      <Grid className="itemArrow" item md={2} xs={12}>
        <SyncAltIcon onClick={handleSwitch} />
      </Grid>

      <Grid item md={4} xs={12}>
        <AutoComplete
          defaultValue={choosenValueTo}
          setShowTable={setShowTable}
          setValue={setChoosenValueTo}
          value={valueTo}
          label={labelTo}
        />
      </Grid>
      <Grid className="some" item md={2} xs={12}>
        <ButtonComponents
          func={handleSetter}
          size={"medium"}
          val={showTable ? "CHIUDI" : "AVANTI"}
        />
      </Grid>
    </Grid>
  );
}

export default WrapperAirport;

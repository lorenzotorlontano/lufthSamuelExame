import React, { useState } from "react";
import WrapperBookFlightSection from "../components/WrapperBookFlightSection";
import { useHistory } from "react-router-dom";
function BookFlightsSection() {
  const [checked, setChecked] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [fromDataTimeValue, setFromDataTimeValue] = useState("");
  const [toDataTimeValue, setToDataTimeValue] = useState("");
  const [choosenValueFrom, setChoosenValueFrom] = useState("");
  const [choosenValueTo, setChoosenValueTo] = useState("");

  const [checkToast, setCheckToast] = useState(false);

  let history = useHistory();

  const handleFlightBrowse = () => {
    if (choosenValueFrom && choosenValueTo && fromDataTimeValue) {
      history.push(
        toDataTimeValue
          ? `/flightList/${choosenValueFrom}/${choosenValueTo}/${fromDataTimeValue}/${toDataTimeValue}`
          : `/flightList/${choosenValueFrom}/${choosenValueTo}/${fromDataTimeValue}/`
      );
    } else {
      setCheckToast(true);
    }
  };

  return (
    <WrapperBookFlightSection
      checkToast={checkToast}
      choosenValueFrom={choosenValueFrom}
      setChoosenValueFrom={setChoosenValueFrom}
      choosenValueTo={choosenValueTo}
      setChoosenValueTo={setChoosenValueTo}
      showTable={showTable}
      setShowTable={setShowTable}
      handleFlightBrowse={handleFlightBrowse}
      fromDataTimeValue={fromDataTimeValue}
      setToDataTimeValue={setToDataTimeValue}
      toDataTimeValue={toDataTimeValue}
      setFromDataTimeValue={setFromDataTimeValue}
      checked={checked}
      setChecked={setChecked}
    />
  );
}

export default BookFlightsSection;

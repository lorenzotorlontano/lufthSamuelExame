import React, { useState, useEffect } from "react";
import useGetAirportsName from "../../hooks/useGetAirportsName";
import WrapperAirport from "../Airports/WrapperAirport";
function Airports({
  setShowTable,
  showTable,
  choosenValueFrom,
  setChoosenValueFrom,
  choosenValueTo,
  setChoosenValueTo,
}) {
  const { data: airportsName, isSuccess } = useGetAirportsName();
  const [labelFrom, setLabelFrom] = useState("Da");
  const [labelTo, setLabelTo] = useState("A");
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");

  useEffect(() => {
    setValueFrom(airportsName?.departureAirports);
    setValueTo(airportsName?.arrivalAirports);
  }, [isSuccess]);

  const handleSwitch = () => {
    setChoosenValueFrom(choosenValueTo);
    setChoosenValueTo(choosenValueFrom);
  };

  const handleSetter = () => {
    setShowTable(!showTable);
  };

  return (
    <WrapperAirport
      handleSetter={handleSetter}
      setChoosenValueFrom={setChoosenValueFrom}
      choosenValueFrom={choosenValueFrom}
      valueFrom={valueFrom}
      labelFrom={labelFrom}
      handleSwitch={handleSwitch}
      choosenValueTo={choosenValueTo}
      setChoosenValueTo={setChoosenValueTo}
      valueTo={valueTo}
      labelTo={labelTo}
      setShowTable={setShowTable}
      showTable={showTable}
    />
  );
}

export default Airports;

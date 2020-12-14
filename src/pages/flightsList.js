import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetFlights from "../hooks/useGetFlights";
import WrapperFlightsList from "../components/WrapperFlightsList";
import { useHistory } from "react-router-dom";

function FlightsList() {
  const { valueDa, valueA, dataTime, toDataTime } = useParams();
  const { data: flights } = useGetFlights(
    valueDa,
    valueA,
    dataTime,
    toDataTime
  );

  let history = useHistory();

  let [arr, setArr] = useState([]);

  const handleShowDetails = (id) => {
    setArr([...arr, id]);
  };

  const handleShowLess = (id) => {
    setArr([...arr].filter((elements) => elements !== id));
  };

  const handleDetailsFlight = (id) => {
    history.push(`/flightDetails/${id}`);
  };

  return (
    <WrapperFlightsList
      handleDetailsFlight={handleDetailsFlight}
      arr={arr}
      flights={flights && flights}
      handleShowDetails={handleShowDetails}
      handleShowLess={handleShowLess}
    />
  );
}

export default FlightsList;

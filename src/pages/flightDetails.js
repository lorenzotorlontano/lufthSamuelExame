import React from "react";
import useGetFlightDetails from "../hooks/useGetFligthDetails";
import { useParams } from "react-router-dom";
import WrapperFlightDetails from "../components/WrapperFlightDetails";

function FlightDetails() {
  const { id } = useParams();

  const { data: flightDetails } = useGetFlightDetails(id);

  return (
    <WrapperFlightDetails flightDetails={flightDetails && flightDetails} />
  );
}

export default FlightDetails;

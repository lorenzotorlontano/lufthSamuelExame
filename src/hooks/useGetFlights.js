import { useQuery } from "react-query";
import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://192.168.130.226:3000/",
});

const getFlights = async (
  key,
  airportFrom,
  airportTo,
  fromDataTime,
  toDataTime
) => {
  const { data } = await axiosInstance.get(
    toDataTime
      ? `flights/from/${airportFrom}/to/${airportTo}/begin/${fromDataTime}/end/${toDataTime}`
      : `flights/from/${airportFrom}/to/${airportTo}/begin/${fromDataTime}`
  );
  return data;
};

export default function useGetFlights(
  airportFrom,
  airportTo,
  fromDataTime,
  toDataTime
) {
  return useQuery(
    ["flights", airportFrom, airportTo, fromDataTime, toDataTime],
    getFlights
  );
}

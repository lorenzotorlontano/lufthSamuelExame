import { useQuery } from "react-query";
import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://192.168.130.226:3000/",
});

const getFlightDetails = async (key, id) => {
  const { data } = await axiosInstance.get(`flights/${id}`);
  return data;
};

export default function useGetFlightDetails(id) {
  return useQuery(["flightDetails", id], getFlightDetails);
}

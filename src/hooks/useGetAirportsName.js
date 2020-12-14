import { useQuery } from "react-query";
import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://192.168.130.226:3000/",
});

const getAirportsName = async () => {
  const { data } = await axiosInstance.get(`flights/available-airports`);
  return data;
};

export default function useGetAirportsName() {
  return useQuery(["airports"], getAirportsName);
}

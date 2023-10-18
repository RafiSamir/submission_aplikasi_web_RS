import axios from "axios";
import "regenerator-runtime/runtime"; 

export async function getData() {
  const response = await axios.get("https://booking.kai.id/api/stations2");
  return response.data;
}

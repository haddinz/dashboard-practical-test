import axios from "axios"
import { Booking } from "../types/booking";

const getApiBooking = async (url: string): Promise<Booking[]> => {
    try {
        const response = await axios.get<Booking[]>(url);
        return response.data
    } catch(err) {
        console.log("Error while getting data = ", err)
        throw err;
    }
}

export default getApiBooking
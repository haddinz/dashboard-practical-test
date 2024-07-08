import axios from "axios"
import { Consumption } from "../types/consumption";

const getApiConsumption = async (url: string): Promise<Consumption[]> => {
    try {
        const response = await axios.get<Consumption[]>(url);
        return response.data
    } catch(err) {
        console.log("Error while getting data = ", err)
        throw err;
    }
}

export default getApiConsumption
import axios from "axios";

export class CarService {
    constructor() {
        this.endpoint = "/api/products/";
    }

    async getCars() {
        const resp = await axios.get(this.endpoint);
        console.log(resp.data);
        return resp.data;
    }
}
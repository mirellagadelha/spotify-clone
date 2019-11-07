import axios from "./axios";

export const Service = {
    get: () =>{
        return axios.get(`/podcasts`)
    }
}
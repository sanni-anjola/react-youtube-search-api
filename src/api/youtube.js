import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY
// https://www.googleapis.com/youtube/v3/search
export const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: API_KEY
    }
})



import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            '4b2fc888aamshab27be7165f0450p1f6cbdjsn060b5c7f886f',
        "X-RapidAPI-Host": 'youtube138.p.rapidapi.com',
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

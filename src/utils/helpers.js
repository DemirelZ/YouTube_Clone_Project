import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": "5e1b5b32c4mshad5b1b1f3e1c3c4p1b95fcjsn83a801dd00aa",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (err) {
    console.log("Verileri çekerken hata oluştu");
  }
};

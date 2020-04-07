import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    // destructure response.data and destructure further to get simplest data
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    // get and return data
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {}
};

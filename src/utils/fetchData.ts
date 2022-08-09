import axios from "axios";

export const getAllData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3020/entries");
    return data;
  } catch (error) {
    console.log(error);
  }
};

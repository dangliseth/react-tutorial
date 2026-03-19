import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "801c2b1215cd408fae8dfcf1dfb91063",
  },
});
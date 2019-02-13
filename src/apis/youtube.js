import axios from "axios";

const KEY = "AIzaSyAz6WlXLCcK_dAvv6DuFRO3CjkWM_3LdMU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

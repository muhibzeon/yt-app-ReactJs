import axios from "axios";

const KEY = "AIzaSyBO26noGFLb1Z7biD2gxBhiHmZ5s98Obnc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});

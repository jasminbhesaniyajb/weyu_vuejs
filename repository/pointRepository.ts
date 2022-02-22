import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { PointRepo } from "~/types";

const points = [
  {
    point: "2x",
    title: "Comment on Twitter anajndkflam",
  },
  {
    point: "3x",
    title: "WEYU Top 5",
  },
  {
    point: "1x",
    title: "Like an instagram",
  },
  {
    point: "2x",
    title: "Share Twitter",
  },
  {
    point: "1x",
    title: "WEYU Top 5",
  },
  {
    point: "3x",
    title: "Share Twitter post",
  },
  {
    point: "2x",
    title: "Comment on Twitter",
  },
  {
    point: "5x",
    title: "Like Youtube video",
  },
  {
    point: "2x",
    title: "Comment on Twitter",
  },
  {
    point: "3x",
    title: "WEYU Top 5",
  },
  {
    point: "1x",
    title: "Like an instagram",
  },
  {
    point: "2x",
    title: "Share Twitter",
  },
];

export default ($axios: NuxtAxiosInstance): PointRepo => ({
  async fetchPoints(params?: { page: number; per: number }) {
    try {
      //   const res = await $axios.get("/points", {
      //     params,
      //   });
      //   if (res.status === 200) {
      // return res.data;
      //   }
      return { points };
    } catch (error) {
      console.log("error", error);
    }
  },
});

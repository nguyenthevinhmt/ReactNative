import axios from "axios";
import { baseUrl } from "../utils/BaseUrl";

const getAllPost = () => {
  const data = axios({
    method: "GET",
    url: `${baseUrl}post`,
  });
  return data;
};
const getPostById = (id: string) => {
  const data = axios({
    method: "GET",
    url: `${baseUrl}post/${id}`,
  });
  return data;
};
const createNewPost = ({ post }: any) => {
  axios({
    method: "POST",
    url: `${baseUrl}post`,
    data: { post },
  });
};
const updatePost = () => {};
const removePost = (id: string) => {};

export { getAllPost, getPostById, createNewPost, updatePost, removePost };

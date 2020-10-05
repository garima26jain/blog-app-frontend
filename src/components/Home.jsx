import React, { useState, useEffect } from "react";
import AddBlog from "./AddBlog";
import { Link } from "react-router-dom";
import Axios from "axios";
import EachBlog from "./EachBlog";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get("/allblog?page=&search=").then((res) =>
      setPosts(res.data.result)
    );
  }, []);

  const onDelete = (id) => {
    const newBlogs = posts.filter((item) => {
      return item._id !== id;
    });
    setPosts(newBlogs);
  };
  return (
    <>
      <Link to="/addblog">
        <button>Add a Blog</button>
      </Link>
      <EachBlog posts={posts} deleteItem={onDelete} />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const EachBlog = ({ posts, deleteItem }) => {
  console.log(posts);
  const [blogs, setBlogs] = useState([]);

  const deleteArticle = (id) => {
    Axios.delete(`/delete/blog/${id}`).then((res) => {
      //console.log("Deleted blog", res.data);
      deleteItem(id);
    });
  };
  return (
    <>
      {posts.map((blog) => (
        <div className="container">
          <h2>{blog.topic}</h2>
          <p>{blog.description}</p>
          <span>{blog.posted_by}</span>
          <div>
            <div>
              <Link to={`/editblog/${blog._id}`}>
                <button>Edit Blog</button>
              </Link>
            </div>
            <div>
              <button onClick={() => deleteArticle(blog._id)}>
                Delete Article
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default EachBlog;

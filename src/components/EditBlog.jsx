import React, { useState, useEffect } from "react";
import Axios from "axios";

const EditBlog = (props) => {
  const [values, setValues] = useState({
    topic: "",
    description: "",
    posted_by: "",
    posted_at: new Date(),
  });

  const { topic, description, posted_at, posted_by } = values;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    const updatedblog = {
      topic,
      description,
      posted_at,
      posted_by,
    };

    Axios.put(`/update/blog/${props.match.params.id}`, updatedblog)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get(`/blog/${props.match.params.id}`)
      .then((res) =>
        setValues({
          topic: res.data.blog.topic,
          description: res.data.blog.description,
          posted_by: res.data.blog.posted_by,
          posted_at: res.data.blog.posted_at,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="topic"
          onChange={handleChange("topic")}
          value={values.topic}
        ></input>
        <input
          type="text"
          className="description"
          onChange={handleChange("description")}
          value={values.description}
        ></input>
        <input
          type="text"
          className="postedBy"
          onChange={handleChange("posted_by")}
          value={values.posted_by}
        ></input>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditBlog;

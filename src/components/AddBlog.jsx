import React, { useState } from "react";
import Axios from "axios";

const AddBlog = () => {
  const [values, setValues] = useState({
    topic: "",
    description: "",
    posted_by: "",
    posted_at: new Date(),
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    Axios({
      method: "post",
      url: "/post/blog",
      data: {
        topic: values.topic,
        description: values.description,
        posted_at: values.posted_at,
        posted_by: values.posted_by,
      },
    }).then((res) => console.log(res.data.result));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddBlog;

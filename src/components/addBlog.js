import {
  Box,
  makeStyles,
  formControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { Formik } from "formik";
import { useState } from "react";
import app_config from "../config";
import MDEditor from "@uiw/react-md-editor";

import Swal from "sweetalert2";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textfield: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "none",
    marginTop: 50,
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));

const intialValues = {
  title: "",
  description: "",
  picture: "",
  userName: "codeforinterview",
  categories: "All",
  createDate: new Date(),
};
const AddBlog = () => {
  const classes = useStyle();
  const url =
    "https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png";

  const [post, setPost] = useState(intialValues);
  const [blogvalue, setblogValue] = useState("**Write Blog Content Here**");
  const [thumbnail, setThumbnail] = useState("");
  const api_url = app_config.api_url;

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const blogForm = {
    title: "",
    description: "",
    image: "",
    data: "",
  };

  const addBlog = (values) => {
    values.image = thumbnail;
    values.data = blogvalue;
    console.log(values);
    fetch(api_url + "/blog/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Blog Added Successfully",
        });
      });
  };

  const uploadThumbnail = (e) => {
    const selFile = e.target.files[0];

    console.log(selFile);

    const tempForm = new FormData();
    tempForm.append("file", selFile);

    fetch(api_url + "/util/uploadfile", { method: "POST", body: tempForm })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setThumbnail(selFile.name);
      });
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="" />

      <Formik initialValues={blogForm} onSubmit={addBlog}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-floating mt-5">
              <input
                className="form-control"
                placeholder="title"
                id="title"
                onChange={handleChange}
                value={values.title}
              />
              <label htmlFor="title">Blog Title</label>
            </div>
            <div className="form-floating mt-3">
              <textarea
                placeholder="description"
                className="form-control"
                id="description"
                onChange={handleChange}
                value={values.description}
              ></textarea>
              <label htmlFor="Description">Description</label>
            </div>

            <label className="mt-3">Upload File</label>
            <input
              onChange={uploadThumbnail}
              className="form-control"
              type="file"
            />
            <MDEditor
              value={blogvalue}
              onChange={setblogValue}
              className="mt-3"
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              className="float-start mt-5 mb-5"
            >
              <AddCircle />
              &nbsp; Create Blog
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default AddBlog;

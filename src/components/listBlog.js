import {
  Card,
  Button,
  CardContent,
  CircularProgress,
  CardMedia,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../config";
import { BlogContext } from "../blogContext";

const BlogDetail = (props) => {
  const url = app_config.api_url;

  return (
    <Card>
      <CardMedia
        component="img"
        image={url + "/" + props.blogData.image}
        height={300}
      />
      <CardContent>
        <h3>{props.blogData.title}</h3>
        <p className="text-muted">{props.blogData.category}</p>
        <p className="">{props.blogData.description}</p>

        <Button
          component={Link}
          to={"/viewblog/" + props.blogData._id}
          variant="contained"
          className="mt-2"
          color="primary"
        >
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

const Listblogs = () => {
  const url = app_config.api_url;

  const [blogList, setblogList, loading, setLoading] = useContext(BlogContext);

  useEffect(() => {
    fetch(url + "blog/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setblogList(data);
        setLoading(false);
      });
  }, []);

  const showblogList = () => {
    if (loading) {
      return <CircularProgress color="primary" />;
    } else {
      return (
        <div className="row">
          {blogList.map((blog) => {
            return (
              <div className="col-md-3">
                <BlogDetail blogData={blog} key={blog._id}></BlogDetail>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center mt-4">List of Added blogs</h2>
      <hr />

      {showblogList()}
    </div>
  );
};

export default Listblogs;
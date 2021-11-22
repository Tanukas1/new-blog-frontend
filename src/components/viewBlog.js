import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
} from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../config";
import "../stylesheets/viewblog.css";

const ViewBlog = () => {
  const { id } = useParams();
  const url = app_config.api_url;
  const [BlogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    fetch(url + "/blog/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogData(data);
        setLoading(false);
      });
  }, []);

  const showBlog = () => {
    if (loading) {
      return <h1>Loading</h1>;
    } else {
      return (
        <Container>
          <Card>
            <CardHeader>
              <h2>{BlogData.title}</h2>
              <h4>{BlogData.description}</h4>
              <p className="text-muted">
                {new Date(BlogData.created).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardMedia component="img" image={url + "/" + BlogData.image} />
            <CardContent>
              <MDEditor.Markdown source={BlogData.data} />
            </CardContent>
          </Card>
        </Container>
      );
    }
  };

  return <div>{showBlog()}</div>;
};

export default ViewBlog;

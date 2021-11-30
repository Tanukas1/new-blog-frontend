import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import app_config from "../config";
import UpdatePort from "./update";

const ManageBlog = () => {
  const url = app_config.api_url;

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchData = () => {
    fetch(url + "blog/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    fetch(url + "blog/delete/" + id, { method: "DELETE" }).then((res) => {
      console.log(res.status);
      fetchData();
    });
  };

  const updateData = (form) => {
    setShowForm(true);
    setFormData(form);
  };

  const displayUpdateForm = () => {
    if (showForm) {
      return <UpdatePort formdata={formData}></UpdatePort>;
    }
  };

  const displayBlogs = () => {
    if (!loading) {
      return blogData.map((blog) => (
        <tr>
          <td>{blog.title}</td>
          <td>{new Date(blog.created).toLocaleDateString()}</td>
          <td>
            <button
              onClick={(e) => deleteData(blog._id)}
              className="btn btn-danger"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={updateData}>
              <i class="fas fa-pen"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <Container>
      <h1 className="text-center">Manage Your Blogs</h1>
      <hr />

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created on</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayBlogs()}</tbody>
      </table>
      <div className="mt-5">{displayUpdateForm()}</div>
    </Container>
  );
};

export default ManageBlog;

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import app_config from "../config";
import '../stylesheets/viewblog.css';

const ViewBlog = () => {

    const { id } = useParams();
    const url = app_config.api_url;
    const [BlogData, setBlogData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(id);
        fetch(url + 'Blog/getbyid/' + id)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setBlogData(data);
                setLoading(false);
            })
    }, [])

    const showBlog = () => {
        if (loading) {
            return <h1>Loading</h1>
        } else {
            return <video src={url + BlogData.file} controls></video>
        }
    }

    return (
        <div>
            {showBlog()}
        </div>
    )
}

export  default  ViewBlog ;
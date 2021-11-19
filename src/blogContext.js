import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = props => {

    const [blogList, setBlogList] = useState([]);
    const [loading, setLoading] = useState(true);

    return <BlogContext.Provider value={[blogList, setBlogList, loading, setLoading]}>
        {props.children}
    </BlogContext.Provider>

}
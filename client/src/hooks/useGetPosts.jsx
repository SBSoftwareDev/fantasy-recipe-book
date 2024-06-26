import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function useGetPosts () {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/api/posts/`);
                setPosts(response.data);
            } catch (error) {
                toast.error("Error: " + error.response.data);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        }

        getPosts();
    }, []);
    

    return { loading, posts };
}
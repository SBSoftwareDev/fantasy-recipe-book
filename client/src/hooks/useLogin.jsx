import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../components/context/AuthContext";

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const { setCurrentUser } = useAuthContext();
    
    async function login({username, password}) {
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", {username, password});

            setCurrentUser({token: response.data.token, username: response.data.username});
            toast.success("Successfully logged in");
            
        } catch (error) {
            setLoading(false);
            if(error.response.data.error) {
                toast.error("Unable to login: " + error.response.data.error);
            } else {
                toast.error("Unable to login: " + error.response.data);
            }
        } finally {
            setLoading(false);
        }
    }

    return { loading, login };

}
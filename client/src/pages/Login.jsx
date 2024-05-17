import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import toast from "react-hot-toast";
import { useAuthContext } from "../components/context/AuthContext";

export default function Login () {
    const { loading, login } = useLogin();
    const { currentUser } = useAuthContext();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {
        if(currentUser) navigate('/');
    })

    async function handleSubmit(e) {
        e.preventDefault();
        
        //perform client-side validation
        if(!inputs.username || !inputs.password){
            toast.error("Please fill in all fields");
            return;
        }

        await login(inputs);

        //Navigate to home
        toast.success("Successfully logged in");
        if(currentUser) navigate('/');
    }

    function handleChange(e) {
        setInputs(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <section className="w-full">
            <h1 className="text-3xl text-default mx-auto w-fit my-4 lg:pt-4">Log In</h1>
            <form method="POST" onSubmit={handleSubmit} className="flex flex-col p-4 gap-4 max-w-96 mx-auto">

                <label className="input input-bordered input-ghost flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow" placeholder="Username" name="username"
                        value={inputs.username} onChange={handleChange}
                    />
                </label>

                <label className="input input-bordered input-ghost flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" className="grow" name="password" id="password" 
                        value={inputs.password} onChange={handleChange}/>
                </label>

                {!loading ? <button className="btn btn-info" type="submit" onClick={handleSubmit}>Login</button>
                    :   <button className="btn btn-info btn-disabled" disabled>
                            <span className="loading loading-spinner loading-sm"></span>
                        </button>}
            </form>
            <h2 className="mx-auto w-fit p-4 text-default">Don&apos;t have an account? <Link to="/register" className="link link-primary">Sign up here</Link></h2>
        </section>
    );
}
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

function Login() {

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const [user,setUser] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(user);
        const response = await fetch(`http://localhost:3000/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        if(response.ok){
            const res_data = await response.json();
            console.log("response from server: ",res_data);

            // storing data in local storage
            storeTokenInLS(res_data.token);
            setUser({
                email:"",
                password:""
            });
            navigate("/");
        }
        else{
            alert("Invalid Credentials!")
        }
        console.log(response);
    };

  return (
    <section className="flex p-[3vw] w-full h-full items-center justify-between bg-zinc-700">
        <div className="w-1/2">
            <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg" className="object-cover w-full" alt="a girl trying to login"/>
        </div>
        <div className="w-1/2 text-black flex justify-center">
            <form onSubmit={handleSubmit}>
                <h1 className="text-[4vw] pb-[2vw] font-bold"><span className="border-b-2 rounded-sm border-blue-600">Login</span></h1>
                <label className="text-[1.2vw] font-semibold">Email</label>
                <br/>
                <input className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]" type="email" value={user.email} onChange={handleInput} name="email" id="email" required autoComplete="off" placeholder="Your Email" />
                <br/>
                <label className="text-[1.2vw] font-semibold">Password</label>
                <br/>
                <input className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]" type="password" value={user.password} onChange={handleInput} name="password" required autoComplete="off" id="password" placeholder="Your Password" />
                <br/>
                <button type="submit" className="bg-[#3466d1] text-[1.6vw] text-white px-[.7vw] py-[.4vw] rounded-md mt-[1vw]">Login</button>
                <h4 className="mt-[1vw]">Don&apos;t have an account? <span className="text-[#5361e1]"><NavLink to="/register">Register</NavLink></span></h4>
            </form>
        </div>
    </section>
  )
}

export default Login

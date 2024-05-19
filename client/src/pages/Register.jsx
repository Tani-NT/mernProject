import { useState } from "react"
import { NavLink, useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

const Register = () => {

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const [user,setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })


    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user);
        const response = await fetch(`http://localhost:3000/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        });
        const res_data = await response.json();
        console.log("response from server: ", res_data.message);

        if(response.ok){
            storeTokenInLS(res_data.token);
            setUser({
                username: "",
                email: "",
                phone: "",
                password: ""
            })
            navigate("/login");
        }
        else{
            alert(res_data.extraDetails);
        }
    };

  return (
    <section className="flex p-[3vw] w-full h-full items-center justify-between bg-zinc-700">
        <div className="w-1/2">
            <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg" className="object-cover w-full" alt="a girl trying to register"/>
        </div>
        <div className="w-1/2 text-black flex justify-center">
            <form onSubmit={handleSubmit}>
                <h1 className="text-[4vw] pb-[2vw] font-bold"><span className="border-b-2 rounded-sm border-blue-600">Register Form</span></h1>
                <label className="text-[1.2vw] font-semibold">Username</label>
                <br/>
                <input className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]" type="text" value={user.username} onChange={handleInput} name="username" id="username" required autoComplete="off" placeholder="Your Username" />
                <br/>
                <label className="text-[1.2vw] font-semibold">Email</label>
                <br/>
                <input className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]" type="email" value={user.email} onChange={handleInput} name="email" id="email" required autoComplete="off" placeholder="Your Email" />
                <br/>
                <label className="text-[1.2vw] font-semibold">Phone</label>
                <br/>
                <input className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]" type="number" value={user.phone} onChange={handleInput} name="phone" id="phone" required autoComplete="off" placeholder="Your Phone Number" />
                <br/>
                <label className="text-[1.2vw] font-semibold">Password</label>
                <br/>
                <input className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]" type="password" value={user.password} onChange={handleInput} name="password" required autoComplete="off" id="password" placeholder="Your Password" />
                <br/>
                <button type="submit" className="bg-[#3466d1] text-[1.6vw] text-white px-[.7vw] py-[.4vw] rounded-md mt-[1vw]">Register Now</button>

                <h4 className="mt-[1vw]">Already a user? <span className="text-[#5361e1]"><NavLink to="/login">Login</NavLink></span></h4>
            </form>
        </div>
    </section>
  )
}

export default Register;
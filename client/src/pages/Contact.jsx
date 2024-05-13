import { useState } from "react";

function Contact() {

  const [contact,setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(contact);
    try{
      const response = await fetch (`http://localhost:3000/api/form/contact`,{
        method: "POST",
        header:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <section className="w-full bg-zinc-700">
        <h1 className="text-[3vw] font-bold pl-[7vw] pt-[4vw]">Contact us</h1>
        <div className="flex items-center justify-between">
          <div className="w-1/2 flex item-center justify-center">
            <img className="" src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715212800&semt=ais" alt="a boy handling calls" />
          </div>
          <div className="w-1/2 text-black flex justify-center">
            <form className="w-full px-[3vw]" onSubmit={handleSubmit}>
                <label className="text-[1.2vw] font-semibold">Username</label>
                <br/>
                <input className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]" type="username" placeholder="Your Username" value={contact.username} onChange={handleInput} name="username" id="username" required autoComplete="off"/>
                <br/>
                <label className="text-[1.2vw] font-semibold">Email</label>
                <br/>
                <input className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]" type="email" placeholder="Your Email" value={contact.email} onChange={handleInput} name="email" required autoComplete="off" id="email"  />
                <br/>
                <label className="text-[1.2vw] font-semibold">Message</label>
                <br/>
                <textarea name="message" id="message" rows="10" cols="30" placeholder="Your Message" className="p-[.6vw] w-full text-[1.3vw] bg-zinc-800 text-white rounded-sm mb-[1vw]"></textarea>
                <br/>
                <button type="submit" className="bg-[#3466d1] text-[1.6vw] text-white px-[.7vw] py-[.4vw] rounded-md mt-[1vw]">Submit</button>
            </form>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.943833628808!2d73.0154666738237!3d19.02219648217132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3715ccdac09%3A0xaedf1e7d7d1a6447!2sSeawoods%20Grand%20Central%20Mall!5e0!3m2!1sen!2sin!4v1715314954830!5m2!1sen!2sin" className="w-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}

export default Contact

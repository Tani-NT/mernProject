import { NavLink } from "react-router-dom";
import Anlaytics from "../component/Anlaytics";
import { useAuth } from "../store/auth";

const About = () => {
  const {user} = useAuth();

  return (
    <>
      <section className="w-full h-full flex items-center justify-between p-[3vw] bg-zinc-700 text-white max-sm:flex-col max-sm:gap-[3vw]">
        <div className="w-1/2 px-[1vw] max-sm:w-full">
          <h5 className="text-[1.3vw] font-semibold">Welcome {user ? `${user.username}` : "User"}</h5>
          <h1 className="text-[4vw] font-bold">Why Choose Us ?</h1>
          <p className="text-[1.2vw] mb-[1vw]">
            Expertise: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus aut deleniti. Totam rem aliquid alias nostrum. Distinctio, quod et?
          </p>
          <p className="text-[1.2vw] mb-[1vw]">
            Customization: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque aspernatur, temporibus ab beatae mollitia pariatur tenetur placeat repellendus vitae excepturi blanditiis aliquam.
          </p>
          <p className="text-[1.2vw] mb-[1vw]">
            Customer-accentric-approach: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi odio obcaecati sunt, expedita aut rem pariatur, minus ab eos deserunt tenetur in.
          </p>
          <p className="text-[1.2vw] mb-[1vw]">
            Affordability: Lorem, ipsum dolor sit amet consectetur adipisicing elit. A illum facere dignissimos explicabo minima velit aut magnam distinctio placeat quae.
          </p>
          <p className="text-[1.2vw] mb-[1vw]">
            Reliability: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eveniet quo omnis ipsam doloremque voluptate nesciunt assumenda expedita enim! Facere, laboriosam minus?
          </p>
          <div>
            <NavLink to="/register" className="px-[1vw] py-[.5vw] bg-blue-700 rounded-md mr-[2vw]">Connect Now</NavLink>
            <NavLink to="/contact" className="px-[1vw] py-[.5vw] border-2 border-zinc-400 rounded-md">Learn More</NavLink>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full">
          <img className="w-full" src="https://png.pngtree.com/illustrations/20190322/ourmid/pngtree-business-office-flat-character-meeting-png-image_37339.jpg" alt="about us" />
        </div>
      </section>
      <section className="bg-zinc-700 py-[2vw]">
        <Anlaytics/>
      </section>

    </>
  )
}

export default About;

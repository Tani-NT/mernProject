import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <footer className="p-[2vw] bg-zinc-800 text-white flex  justify-between">
            <h2 className="font-semibold text-[1.8vw]">@technicaltitans 2024</h2>
            <div className="flex items-center gap-[.3vw]">
                <h3>Socials:</h3>
                <FaSquareFacebook/>
                <FaSquareXTwitter/>
                <FaSquareInstagram/>
                <FaSquareYoutube/>
            </div>
        </footer>
    </>
  )
}

export default Footer
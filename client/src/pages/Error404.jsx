import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
        <div className="error-page w-full h-full flex justify-center">
            <div className="content w-1/2 flex flex-col items-center justify-center">
                <h2 className="header text-[4vw] font-bold">404</h2>
                <h4 className="text-[2vw] font-semibold">Page Not Found!</h4>
                <p className="text-[1.6vw] mt-[1vw]">Oops! It&apos;s seems like the page you are trying to access doesn&apos;t exist. If you believe there is an issue, feel free to report it and we will look into it.</p>
                <div className="btn flex gap-[3vw] mt-[1vw]">
                    <NavLink to="/" className="px-[.9vw] py-[.4vw] border-2 rounded-md border-zinc-700">Return Home</NavLink>
                    <NavLink to="/contact" className="px-[.9vw] py-[.4vw] rounded-md border-2 border-zinc-700" >Report Problem</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Error404;
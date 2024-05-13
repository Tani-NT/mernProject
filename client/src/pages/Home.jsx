import Anlaytics from "../component/Anlaytics";

function Home() {
  return (
    <>
      <main className="w-full h-full flex items-center justify-between p-[3vw] max-sm:flex-col max-sm:w-full max-sm:justify-normal bg-zinc-700 text-white">
        <section className="w-1/2 max-sm:w-full px-[1vw]">
          <h4 className="text-[1.3vw] font-semibold"><span className="border-b-2 rounded-sm border-blue-600">One of the best IT company.</span></h4>
          <h1 className="text-[5vw] font-bold ">Technical Titans</h1>
          <p className="text-[1vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero esse rerum sequi perferendis reprehenderit, aperiam, voluptas aut voluptatem voluptates aliquid atque quis nam eum id sed molestias porro beatae? Assumenda quaerat velit minima consectetur recusandae!</p>
          <div className="flex gap-[3vw] mt-[3vw]">
            <button className="text-[1.6vw] px-[.9vw] py-[.4vw] bg-[#475ce7] text-white rounded-md hover:bg-[#3347ce] ">Let&apos;s Connect</button>
            <button className=" text-[1.6vw] border-zinc-400 border-2 px-[.9vw] py-[.4vw] rounded-md ">Explore</button>
          </div>
        </section>
        <section className="w-1/2max-sm:w-full ">
          <img src="https://img.freepik.com/free-vector/cartoon-coworking-space-illustration_23-2148819269.jpg" alt="people working together in a office"/>
        </section>
      </main>
      <section className="bg-zinc-700 py-[2vw]">
        <Anlaytics/>
      </section>
    </>
  )
}

export default Home;

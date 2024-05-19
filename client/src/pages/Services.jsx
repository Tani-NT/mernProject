import { useAuth } from "../store/auth";

function Services() {

  const{service} = useAuth();

  return (
    <section className="services bg-zinc-700 text-zinc-900 px-[2.5vw] ">
      <div className="container">
        <h1 className="main-heading text-[4vw] font-semibold p-[2vw]">Services</h1>
      </div>
      <div className="container flex justify-between flex-wrap w-full">
        {service.map((curElem, index)=>{
          const {provider, price, service, description} = curElem;
          return(<div key={index} className="card w-[30vw] mb-[2vw] rounded-md overflow-hidden border-zinc-300 border-2">
                <div className="card-img w-full">
                  <img src="https://stepupit.in/wp-content/uploads/2023/06/6410ebf8e483b53d6186fc53_ABM-College-Web-developer-main.png" alt="service info" className="w-full object-cover"/>
                </div>
              <div className="card-details p-[1.5vw]">
                <div className="flex justify-between font-semibold text-[1.2vw]">
                  <p>{provider}</p>
                  <p>{`$${price}`}</p>
                </div>
                <h2 className="text-[3vw] leading-none my-[1vw] font-bold">{service}</h2>
                <p className="text-[1.4vw]">{description}</p>
                </div>
              </div>);
        })}
      </div>
    </section>
  )
}

export default Services;

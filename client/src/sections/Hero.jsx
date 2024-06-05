import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import {statistics} from '../constants'
const Hero = () => {
  return (
    <section id="home"
    className="w-full flex xl:flex-row flex-col 
    justify-center min-h-screen gap-10 max-container">
      <div className="relative  xl:w-2/5 flex flex-col 
      justify-centern items-start w-full max-xl:padding-x pt-28">
        <p className="">our summer collections</p>
        <h1><span>The new Arrival</span><br />
        <span>Nike</span>
        shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>
          <Button label="Shop now"
          iconURL={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat)=>(
              // because label is Uniqe in this case
              <div key={stat.label}>
                <p>{stat.value}</p>
                <p >{stat.label}</p>
              </div>
           
            ))}
          </div>
      </div>
    </section>
  )
}

export default Hero
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, samllHeroVideo} from "../utils";
const Hero = () => {

const [videoSrc, setVideoSrc] = useState(window.innerWidth <760 ? samllHeroVideo : heroVideo)

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay:1.5 })
  }, [])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">iPhone 15 Pro</p>

          <div className="md:w-10/12 w-9/12">
          <video>
            <source src={videoSrc}/>
          </video>

          </div>
      </div>
    </section>
  )
}

export default Hero

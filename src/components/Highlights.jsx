import { useEffect } from "react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"; // Ensure this path is correct and the component exists


const Highlights = () => {

  useEffect(() => {
    gsap.to('#title', { opacity: 1, y: 0,  });
    gsap.to('.Link', { opacity: 1, y: 0, duration:1, stagger:0.3 });
  }, []);
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex item-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="Link flex items-center">
              Watch the film
              <img src={watchImg} alt="watch" className=" ml-2" />
            </p>
            <p className="Link flex items-center">
              Watch the event
              <img src={rightImg} alt="right" className=" ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights

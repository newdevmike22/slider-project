import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { LongList } from "../data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
    const settings = {
      dots: true,
      fade: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section className="slick-container">
        <Slider {...settings}>
          {LongList.map((person) => {
            const {id, image, name, title, quote} = person;

            return (
              <article key={id}>
                <img src={image} alt={name} className="w-[170px] h-[170px] rounded-[50%] mb-[1rem] object-cover border-4 border-[#aeb1fc] drop-shadow-lg mx-auto" />
                <h5 className="uppercase text-[#0e14a1] text-2xl font-semibold mb-1">{name}</h5>
                <p className="uppercase font-medium mb-3 text-[#334155]">"{title}"</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="text-5xl mt-4 text-[#0e14a1] mx-auto" />
              </article>
            );
          })}
        </Slider>
      </section>
    )
  };
  
  export default SlickCarousel;
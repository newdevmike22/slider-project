import { useState } from "react";
import { shortList, List, LongList } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);

    const prevSlide = () => {};
    const nextSlide = () => {};

    return (
      <section className="my-0 mx-auto mt-[10rem] w-[80vw] max-w-[800px] relative h-[450px] overflow-hidden">
        {people.map((person) => {
          const {id, image, name, title, quote} = person;

          return (
            <article 
              className="text-center absolute top-0 left-0 w-[100%] h-[100%] transition-all duration-300 ease-in-out"
              key={id}
            >
              <img src={image} alt={name} className="w-[150px] h-[150px] rounded-[50%] mb-[1rem] object-cover border-4 border-[#aeb1fc] drop-shadow-lg mx-auto" />
              <h5 className="uppercase text-[#0e14a1] text-xl font-medium mb-3">{name}</h5>
              <p className="capitalize mb-3 text-[#334155]">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="text-5xl mt-4 text-[#0e14a1] mx-auto" />
            </article>
          );
        })}
        <button type="button" className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    )
  };
  
  export default Carousel;
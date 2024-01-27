import { useEffect, useState } from "react";
import { shortList, List, LongList } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(LongList);
  const [currentPerson, setCurrentPerson] = useState(0);

    const prevSlide = () => {
      setCurrentPerson((oldPerson) => {
        const result = (oldPerson - 1 + people.length) % people.length;
        return result;
      });
    };


    const nextSlide = () => {
      setCurrentPerson((oldPerson) => {
        const result = (oldPerson + 1) % people.length;
        return result;
      });
    };

    useEffect(() => {
      let sliderId = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => {
        clearInterval(sliderId)};
    }, [currentPerson]);

    return (
      <section 
        className="my-0 mx-auto mt-[10rem] w-[80vw] max-w-[800px] relative h-[450px] overflow-hidden">
        {people.map((person, personIndex) => {
          const {id, image, name, title, quote} = person;

          return (
            <article 
              className="text-center absolute top-0 left-0 w-[100%] h-[100%] transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
                opacity: personIndex === currentPerson ? 1 : 0,
                visibility: personIndex === currentPerson ? 'visible' : 'hidden',
              }}
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
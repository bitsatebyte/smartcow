import { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './Carousel.css';

// Image import
import firstImage from '../../static/images/1.jpg';
import secondImage from '../../static/images/2.jpg';
import thirdImage from '../../static/images/3.jpg';
import fourthImage from '../../static/images/4.jpg';


function Carousel() {

  useEffect(() => {
    const elem = document.querySelector('.mainCarousel');
    new Flickity(elem, {
      cellAlign: 'left',
      contain: true,
      pageDots: false
    });
  }, []);

  return (
    <div className="mainCarousel">
      <img src={firstImage} alt="1"></img>
      <img src={secondImage} alt="2"></img>
      <img src={thirdImage} alt="3"></img>
      <img src={fourthImage} alt="4"></img>
    </div>
  );
}

export default Carousel;
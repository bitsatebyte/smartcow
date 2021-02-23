import { useEffect } from 'react';
import Flickity from 'flickity';
import analyze from 'rgbaster';
import tinycolor from 'tinycolor2';
import 'flickity/css/flickity.css';
import './Carousel.css';

// Image import
import firstImage from '../../static/images/1.jpg';
import secondImage from '../../static/images/2.jpg';
import thirdImage from '../../static/images/3.jpg';
import fourthImage from '../../static/images/4.jpg';

async function calculateComplementaryColorForBanner(path) {
  const c = await analyze(path, { ignore: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'] });
  const [primaryRgb, secondaryRgb, tertiaryRgb] = [c[0].color, c[1].color, c[2].color];
  console.log(`Primary: ${primaryRgb} \n Secondary: ${secondaryRgb} \n Tertiary: ${tertiaryRgb}`);
  const complement = tinycolor(primaryRgb.toString()).complement().toHexString();
  console.log(complement);
}

const mapImagesToDivs = arr => {
  const ret = arr.map((el, index) => {
    return (
      <img src={el} alt={index}></img>
    )
  });

  return ret;
}


function Carousel() {

  const images = [firstImage, secondImage, thirdImage, fourthImage];
  const carouselCells = mapImagesToDivs(images);

  useEffect(() => {
    const elem = document.querySelector('.mainCarousel');
    new Flickity(elem, {
      cellAlign: 'left',
      autoPlay: true,
      contain: true,
      pageDots: false
    });
    calculateComplementaryColorForBanner(fourthImage);
  }, []);

  return (
    <div className="mainCarousel">
      {carouselCells}
    </div>
  );
}

export default Carousel;
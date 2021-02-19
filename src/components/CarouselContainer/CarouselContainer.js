import Carousel from '../Carousel/Carousel';
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';
import TextOnCarousel from '../TextOnCarousel/TextOnCarousel';
import './CarouselContainer.css';

function CarouselContainer() {

  return (
    <div className="s-carousel">
      <Carousel />
      <TextOnCarousel />
      <YoutubeVideo />
    </div>
  );
}

export default CarouselContainer;
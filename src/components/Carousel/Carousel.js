import { useEffect } from 'react';
import Glider from 'glider-js';
import 'glider-js/glider.css';
import './Carousel.css';


function Carousel() {

  useEffect(() => {
    new Glider(document.querySelector('.glider'), {
      duration: 1,
      scrollLock: false,
      slidesToShow: 1
    });

    // return function () {
    //   Glider(document.querySelector('.glider')).destroy();
    // };
  }, []);

  return (
    <div className="glider">
      <div> 1 </div>
      <div> 2 </div>
      <div> 3 </div>
      <div> 4 </div>
      <div> 5 </div>
      <div> 6 </div>
    </div>
  );
}

export default Carousel;
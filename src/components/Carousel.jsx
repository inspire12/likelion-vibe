import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'https://picsum.photos/1200/400?random=1',
    'https://picsum.photos/1200/400?random=2',
    'https://picsum.photos/1200/400?random=3',
    'https://picsum.photos/1200/400?random=4',
    'https://picsum.photos/1200/400?random=5',
  ];

  return (
    <div className="w-full max-w-7xl mx-auto relative group">
      <style>{`
        .slick-prev,
        .slick-next {
          z-index: 1;
          width: 40px;
          height: 40px;
          opacity: 0;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.2) !important;
          border-radius: 50%;
        }

        .slick-prev {
          left: 10px;
        }

        .slick-next {
          right: 10px;
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 24px;
          color: white;
          opacity: 0.8;
        }

        .slick-dots {
          bottom: 20px;
        }

        .slick-dots li button:before {
          color: white;
        }

        .group:hover .slick-prev,
        .group:hover .slick-next {
          opacity: 1;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
        }

        .group:hover .slick-prev:hover,
        .group:hover .slick-next:hover {
          background: rgba(255, 255, 255, 0.3) !important;
        }
      `}</style>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel; 
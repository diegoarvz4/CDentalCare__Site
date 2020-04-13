import React from "react";
import Slider from "react-slick";


class CarouselSlick extends React.Component {

  

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {
          this.props.items.map(item => (
            <div className="Cover__Carousel__Item"
              style={{
                backgroundImage: `url(${item.img_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <img src={item.img_url} alt="" />
            </div>
          ))
        }
      </Slider>
    );
  }
}

export default CarouselSlick;
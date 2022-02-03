import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from './Coffemenu.module.scss'
import { Link } from 'react-router-dom'

const CoffeMenu = ({ coffeState }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 2,
    speed: 500,
    nextArrow: <></>,
    prevArrow: <></>,
    variableWidth: true,
  }

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>{coffeState.name}</h1>

      {coffeState.products ? (
        <Slider {...settings}>
          {coffeState.products.map((coffee) => (
            <div
              className={classes.carouselItem}
              key={coffee.id}
              style={{ width: 142 }}
            >
              <div className={classes.itemContent}>
                <img
                  className={classes.carouselImg}
                  src={coffee.mainPhoto}
                  alt={coffee.name}
                />
                <Link
                  className={classes.link}
                  to={`coffee/${coffee.id}/${coffee.name}`}
                >
                  <p className={classes.name}>{coffee.name}</p>
                  <p className={classes.price}>{`${coffee.price}₾`}</p>
                </Link>
                <div
                  className={classes.bg}
                  style={{ backgroundColor: coffee.bgColor }}
                ></div>
              </div>
            </div>
          ))}
        </Slider>
      ) : null}
    </section>
  )
}

export default CoffeMenu

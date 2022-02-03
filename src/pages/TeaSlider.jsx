import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from './TeaSlider.module.scss'

const TeaSlider = ({ products, name }) => {
  const [productList, setProductList] = useState({})
  useEffect(() => {
    products.length &&
      setProductList(products.find((product) => product.name === name))
  }, [products, name, productList])

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
      <h1 className={classes.title}>{productList.name}</h1>

      {productList.subCategories ? (
        <Slider {...settings}>
          {productList.subCategories[0].products.map((item) => (
            <div
              className={classes.carouselItem}
              key={item.id}
              style={{ width: 170 }}
            >
              <div>
                <div className={classes.itemContent}>
                  <img
                    className={classes.carouselImg}
                    src={item.mainPhoto}
                    alt={item.name}
                  />

                  <p className={classes.name}>{item.name}</p>
                  <p className={classes.price}>{`${item.price}₾`}</p>

                  <div
                    className={classes.bg}
                    style={{ backgroundColor: item.bgColor }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : null}
    </section>
  )
}

export default TeaSlider

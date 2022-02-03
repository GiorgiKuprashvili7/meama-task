import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from './CocktailSlider.module.scss'
import hot from '../assets/hot.png'
import cold from '../assets/cold.png'

const CocktailSlider = ({ products, name }) => {
  const [productList, setProductList] = useState({})
  const [category, setCategory] = useState(0)

  useEffect(() => {
    products.length &&
      setProductList(products.find((product) => product.name === name))

    console.log(productList)
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
      <h1 className={classes.title}>კოქტეილები</h1>

      {productList.subCategories
        ? productList.subCategories.map((categ, index) => (
            <button
              className={`${classes.categoryBtn} ${
                category === index ? classes.active : ''
              }`}
              key={index}
              onClick={() => setCategory(index)}
            >
              {categ.name}
            </button>
          ))
        : null}

      {productList.subCategories ? (
        <Slider {...settings}>
          {productList.subCategories[category].products.map((item) => (
            <div
              className={classes.carouselItem}
              key={item.id}
              style={{ width: 170 }}
            >
              <div>
                <div className={classes.itemContent}>
                  {productList.subCategories[category].name === 'ცივი' ? (
                    <img className={classes.hotOrColdImg} src={cold} alt="" />
                  ) : (
                    <img className={classes.hotOrColdImg} src={hot} alt="" />
                  )}
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

export default CocktailSlider

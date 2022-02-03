import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import classes from './Coffee.module.scss'
import back from '../assets/back.png'

const Coffee = ({ coffeeDetails }) => {
  const { name } = useParams()
  const [coffee, setCoffee] = useState([])
  const [selectedCoffee, setSelectedCoffee] = useState('')

  useEffect(() => {
    coffeeDetails.products
      ? setCoffee(coffeeDetails.products.find((cof) => cof.name === name))
      : setCoffee([])

    coffee.imgUrls
      ? setSelectedCoffee(coffee.imgUrls[0])
      : setSelectedCoffee('')
  }, [coffeeDetails, name, coffee.imgUrls])

  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <Link className={classes.backBtn} to="/">
          <img src={back} alt="" />
        </Link>
      </header>

      <div className={classes.gridContainer}>
        <div className={classes.descriptionBox}>
          <h1 className={classes.name}>{coffee.name}</h1>
          <p className={classes.price}>{`${coffee.price}₾`}</p>

          {coffee.specifications
            ? coffee.specifications.map((spec, index) => {
                return (
                  <div className={classes.specBox} key={index}>
                    <p className={classes.specName}>{spec.name}</p>
                    <p className={classes.specValue}>{spec.value}</p>
                  </div>
                )
              })
            : null}

          <div className={classes.selectCoffeeBox}>
            {coffee.imgUrls
              ? coffee.imgUrls.map((image, index) => (
                  <div
                    onClick={() => setSelectedCoffee(image)}
                    className={`${classes.selectCoffee} ${
                      selectedCoffee === image ? classes.active : ''
                    }`}
                    key={index}
                  >
                    <img src={image} alt={coffee.name} />
                  </div>
                ))
              : null}
          </div>
        </div>

        <div className={classes.imageBox}>
          <img src={selectedCoffee} alt={coffee.name} />
          <div
            className={classes.bg}
            style={{ backgroundColor: coffee.bgColor }}
          ></div>
        </div>
      </div>

      <p className={classes.descriptionTitle}>აღწერა</p>
      <p
        className={classes.description}
        dangerouslySetInnerHTML={{ __html: coffee.description }}
      ></p>
    </section>
  )
}

export default Coffee

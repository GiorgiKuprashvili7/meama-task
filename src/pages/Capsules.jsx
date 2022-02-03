import React from 'react'
import classes from './Capsules.module.scss'
import cap1 from '../assets/capsule1.png'
import cap2 from '../assets/capsule2.png'

const Capsules = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>სტიკები</h1>

      <div className={classes.capsulesContainer}>
        <div>
          <img className={classes.img} src={cap1} alt="" />
          <p className={classes.name}>ევროპული</p>
          <p className={classes.price}>15₾</p>
        </div>

        <div>
          <img className={classes.img} src={cap2} alt="" />
          <p className={classes.name}>ამერიკული</p>
          <p className={classes.price}>18₾</p>
        </div>
      </div>
    </section>
  )
}

export default Capsules

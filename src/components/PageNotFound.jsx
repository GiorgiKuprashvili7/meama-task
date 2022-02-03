import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <section className={classes.content}>
      <h1>ოპააა...</h1>
      <p>გვერდი ვერ მოიძებნა</p>
      <Link to="/">მთავარზე დაბრუნება</Link>
    </section>
  )
}

export default PageNotFound

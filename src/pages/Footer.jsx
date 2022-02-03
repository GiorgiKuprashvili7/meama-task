import axios from 'axios'
import React, { useState, useEffect } from 'react'
import classes from './Footer.module.scss'

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({})
  const [socialList, setSocialList] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://cms.meamacollect.ge/meama-collect/api/client/ka/contact-info'
      )
      .then((res) => {
        setContactInfo(res.data)
        setSocialList(res.data.socialLinks)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.content}>
          <p className={classes.title}>{contactInfo.name}</p>

          <div className={classes.links}>
            <a className={classes.tel} href={`tel:${contactInfo.value}`}>
              {contactInfo.value}
            </a>

            <div className={classes.socialLinks}>
              {socialList.length &&
                socialList.map((link, index) => (
                  <a
                    key={index}
                    href={`${link.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={link.imageUrl} alt="social link" />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

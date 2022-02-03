import React from 'react'
import classes from './Header.module.scss'
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png'
import lang from '../assets/language.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Header = () => {
  const [language, setlanguage] = useState([])
  const [selectLanguage, setSelectLanguage] = useState(false)
  const [languageValue, setLanguageValue] = useState('')

  useEffect(() => {
    axios
      .get('https://cms.meamacollect.ge/meama-collect/api/client/languages')
      .then((res) => {
        setlanguage(res.data)
        setLanguageValue(res.data[0].code)
      })
  }, [])

  const toggler = () => {
    setSelectLanguage((prevState) => !prevState)
  }

  const isRadioSelected = (value) => languageValue === value
  return (
    <>
      <header className={classes.header}>
        <div className={classes.content}>
          <img className={classes} src={logo} alt="meama logo" />

          <div className={classes.changeLanguege} onClick={toggler}>
            <img src={lang} alt="select language" />
            <p>{languageValue}</p>
            <img src={arrow} alt="dropdown" />
          </div>
        </div>
      </header>

      {selectLanguage ? (
        <div className={classes.selectLanguage}>
          <div onClick={toggler} className={classes.background}></div>

          <div className={classes.select}>
            <h1>ენა</h1>
            <div>
              {language.length
                ? language.map((lang) => {
                    return (
                      <div className={classes.radioBox} key={lang.id}>
                        <div>
                          <img src={lang.imageUrl} alt={lang.name} />
                          <label htmlFor={lang.name}>{lang.name}</label>
                        </div>
                        <input
                          name="selectLanguage"
                          type="radio"
                          value={lang.code}
                          id={lang.name}
                          onChange={(e) => {
                            setLanguageValue(e.target.value)
                            toggler()
                          }}
                          checked={isRadioSelected(lang.code)}
                        />
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Header

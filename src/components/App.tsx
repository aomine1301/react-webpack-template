import React, { useEffect, useState } from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Button from './Button/Button'
import LogoIcon from '../assets/Logo.svg'
import SectionTitle from './SectionTitle/SectionTitle'
import { checkToken } from '../api/checkToken'
import Preloader from './Preloader/Preloader'
import { getUsers, Users } from '../api/getUsers'
const cx = classNames.bind(style)

const App = () => {
  const [users, setUsers] = useState<Users[]>()
  const [token, setToken] = useState<boolean>(false)

  useEffect(() => {
    setToken(false)
    const checkSuccess = async () => {
      if (!localStorage.getItem('token')) {
        await checkToken()
      }
    }
    checkSuccess()
      .then(() => setToken(true))
      .catch(console.error)
  }, [])

  useEffect(() => {
    getUsers().then((res) => setUsers(res))
  }, [])
  console.log(users)
  return (
    <>
      {token ? (
        <div className={cx('container')}>
          <div className={cx('container-header')}>
            <div className={cx('container-logo')}>
              <LogoIcon />
            </div>
            <Button text='Users' />
            <div className={cx('container-button')}>
              <Button text='Sign Up' />
            </div>
          </div>
          <div className={cx('container-background-image')}>
            <div className={cx('title')}>Test assignment for front-end developer</div>
            <div className={cx('subtitle')}>
              What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design
              thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of
              Front-End Development keeps evolving.
            </div>
            <Button text={'Sign Up'} />
          </div>
          <SectionTitle text='Working with GET request' />
        </div>
      ) : (
        <Preloader type={'large'} />
      )}
    </>
  )
}

export default App

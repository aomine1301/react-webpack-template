import React, { useEffect, useState } from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Button from './Button/Button'
import LogoIcon from '../assets/Logo.svg'
import SectionTitle from './SectionTitle/SectionTitle'
import { checkToken } from '../api/checkToken'
import Preloader from './Preloader/Preloader'
import { getUsers, ResponseUsers } from '../api/Users'
import Card from './Card/Card'
import { getPositions, PositionInterface } from '../api/getPositions'
import Form from './Form/Form'
const cx = classNames.bind(style)

const App = () => {
  const [page, setPage] = useState<number>(1)
  const [responseUsers, setResponseUsers] = useState<ResponseUsers>()
  const [token, setToken] = useState<boolean>(false)
  const [positions, setPositions] = useState<PositionInterface[]>([])

  const increasePageHandler = () => {
    if (responseUsers.total_pages === responseUsers.page) {
      setPage(1)
      return
    }
    setPage(page + 1)
  }

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
    getPositions().then((res) => setPositions(res))
    getUsers(page, 6).then((res) => setResponseUsers(res))
  }, [page])

  return (
    <>
      {token && responseUsers?.success ? (
        <div className={cx('container')}>
          <div className={cx('container-header')}>
            <div className={cx('container-logo')}>
              <LogoIcon />
            </div>
            <Button text='Users' />
            <div className={cx('container-button')}>
              <Button text='Sign up' />
            </div>
          </div>
          <div className={cx('container-background-image')}>
            <div className={cx('title')}>Test assignment for front-end developer</div>
            <div className={cx('subtitle')}>
              What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design
              thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of
              Front-End Development keeps evolving.
            </div>
            <Button text='Sign up' />
          </div>
          <SectionTitle text='Working with GET request' />
          <div className={cx('carts-section-container')}>
            {responseUsers?.users.map((user) => {
              return <Card key={user.id} type='normal' user={user} />
            })}
            <div className={cx('cart-section-button-container')}>
              <Button bigButton text='Show more' onClick={increasePageHandler} />
            </div>
          </div>
          <SectionTitle text='Working with POST request' />
          <Form positions={positions} />
        </div>
      ) : (
        <Preloader type={'large'} />
      )}
    </>
  )
}

export default App

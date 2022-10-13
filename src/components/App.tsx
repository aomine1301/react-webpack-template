import React, { useCallback, useEffect, useState } from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Button from './Button/Button'
import LogoIcon from '../assets/Logo.svg'
import SectionTitle from './SectionTitle/SectionTitle'

import Preloader from './Preloader/Preloader'
import { Pagination } from '../api/Users'
import Card from './Card/Card'
import Form from './Form/Form'
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks'
import { useGetUsersQuery } from '../state/query/queryUsers'
import { useGetTokenQuery } from '../state/query/queryToken'
import { useGetPositionsQuery } from '../state/query/queryPositions'
import { setUsers } from '../state/slices/users'
import ReactTooltip from 'react-tooltip'

const cx = classNames.bind(style)

const App = () => {
  const { usersSlice } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  const [pagination, setPagination] = useState<Pagination>({ count: 6, page: 1 })
  const { data: users, isSuccess: isSuccessUsers } = useGetUsersQuery(pagination)
  const { isSuccess: isSuccessToken } = useGetTokenQuery()
  const { data: dataPositions, isSuccess: isSuccessPositions } = useGetPositionsQuery()
  const increasePageHandler = useCallback(() => {
    if (usersSlice?.total_pages === usersSlice?.page) {
      return setPagination((prevState) => ({ ...prevState, page: 6, count: 1 }))
    }
    setPagination((prevState) => ({ ...prevState, count: prevState.count + 6 }))
  }, [usersSlice?.page, usersSlice?.total_pages])

  // useEffect(() => {}, [pagination])
  useEffect(() => {
    dispatch(setUsers(users))
  }, [dispatch, users, pagination])
  console.log('render')
  return (
    <>
      {isSuccessUsers && isSuccessPositions && isSuccessToken ? (
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
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of
              Front-End Development keeps evolving.
            </div>
            <Button text='Sign up' />
          </div>
          <SectionTitle text='Working with GET request' />

          <div className={cx('carts-section-container')}>
            {usersSlice?.users?.map((user) => {
              return <Card key={user.id} type='normal' user={user} />
            })}
            <div className={cx('cart-section-button-container')}>
              <Button bigButton text='Show more' onClick={increasePageHandler} />
            </div>
          </div>
          <SectionTitle text='Working with POST request' />
          <Form positions={dataPositions.positions} />
        </div>
      ) : (
        <Preloader type={'large'} />
      )}
    </>
  )
}

export default App

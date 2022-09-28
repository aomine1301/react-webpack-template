import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Card.scss'
import { User } from '../../api/Users'

const cx = classNames.bind(styles)

interface Props {
  type: 'normal' | 'large'
  user: User
}

const Card: FC<Props> = ({ user }) => {
  return (
    <div className={cx('cart-container')}>
      <div className={cx('cart-image-container')}>
        <img className={cx('cart-image')} src={user.photo} alt='userPhoto' />
      </div>
      <div className={cx('cart-information')}>{user.name}</div>
      <div className={cx('cart-information', 'cart-second')}>{user.position}</div>
      <div className={cx('cart-information')}>{user.email}</div>
      <div className={cx('cart-information')}>{user.phone}</div>
    </div>
  )
}

export default Card

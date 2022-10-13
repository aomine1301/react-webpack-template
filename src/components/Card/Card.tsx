import React, { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Card.scss'
import { User } from '../../api/Users'
import Tippy from '@tippyjs/react'
// import 'tippy.js/dist/tippy.css'
import Tooltip from '../Tooltip/Toolltip'

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

      <Tippy theme='light' arrow={true} content={<span>{user.name}</span>}>
        <button>123213</button>
      </Tippy>

      <Tippy
        // className={cx('tooltip')}
        animation='fade'
        content={user.name}
        arrow={true}
      >
        {/* <Tooltip tooltipProps={{ content: user.name }}> */}
        <div className={cx('cart-information')}>{user.name}</div>
        {/* </Tooltip> */}
      </Tippy>

      {/* <Tippy content={<span>{user.position}</span>}> */}
      <div className={cx('cart-information', 'cart-second')}>{user.position}</div>
      {/* </Tippy> */}
      <div className={cx('cart-information')}>{user.email}</div>
      <div className={cx('cart-information')}>{user.phone}</div>
    </div>
  )
}

export default Card

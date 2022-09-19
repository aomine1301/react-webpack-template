import React, { FC } from 'react'
import classNames from 'classnames/bind'
import style from './Button.scss'

const cx = classNames.bind(style)

interface Props {
  text: string
  customType?: 'normal' | 'hover' | 'disabled'
}

const Button: FC<Props> = ({ text, customType = 'normal' }) => {
  return (
    <div>
      <button className={cx('button', `${customType}-button`)}>{text}</button>
    </div>
  )
}

export default Button

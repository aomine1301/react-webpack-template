import React, { FC } from 'react'
import classNames from 'classnames/bind'
import style from './Button.scss'

const cx = classNames.bind(style)

interface Props {
  text: string
  customStyleType?: 'normal' | 'disabled'
  bigButton?: boolean
  customType?: 'submit' | 'button' | 'reset'
  onClick?: () => void
}

const Button: FC<Props> = ({ text, customStyleType = 'normal', bigButton, customType = 'button', onClick }) => {
  return (
    <div>
      <button type={customType} className={cx('button', `${customStyleType}-button`, bigButton ? 'big' : '')} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button

import React, { FC } from 'react'
import style from './Preloader.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(style)

interface Props {
  type: 'normal' | 'large'
}

const Preloader: FC<Props> = ({ type }) => {
  return (
    <div className={cx('container-preloader')}>
      <div className={cx('preloader', `preloader-${type}`)}></div>
    </div>
  )
}

export default Preloader

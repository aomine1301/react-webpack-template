import React, { FC } from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

interface Props {
  title: string
}

const App: FC<Props> = ({ title }) => <div className={cx('container-one')}>{title}</div>

export default App

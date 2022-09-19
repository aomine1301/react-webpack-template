import React, { FC } from 'react'
import style from './SectionTitle.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

interface Props {
  text: string
}

const SectionTitle: FC<Props> = ({ text }) => {
  return <div className={cx('section-title')}>{text}</div>
}

export default SectionTitle

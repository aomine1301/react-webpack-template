import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import style from './Input.scss'
import { UseFormRegisterReturn } from 'react-hook-form'

const cx = classNames.bind(style)

interface Props {
  label?: string
  register: UseFormRegisterReturn<'email' | 'name' | 'phone'>
}
const Input: FC<Props> = ({ label, register }) => {
  const [checked, setChecked] = useState<boolean>(false)

  const checkedHandler = () => {
    setChecked(true)
  }
  useEffect(() => {
    setChecked(false)
  }, [])
  return (
    <div className={cx('input-container', label === 'Phone' ? 'last' : '')}>
      <label className={cx(checked ? 'input-label-checked' : 'input-label')} htmlFor={label}>
        {label}
      </label>
      <input id={label} type='text' className={cx('input')} {...register} onClick={checkedHandler} />
    </div>
  )
}

export default Input

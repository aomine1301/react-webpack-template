import React, { FC } from 'react'
import classNames from 'classnames/bind'
import style from './InputCheckBox.scss'
import { EPosition } from '../../api/getPositions'
import { UseFormRegisterReturn } from 'react-hook-form'

const cx = classNames.bind(style)

interface Props {
  id: number
  name: EPosition
  register: UseFormRegisterReturn<'position_id'>
}

const InputCheckBox: FC<Props> = ({ id, name, register }) => {
  return (
    <div className={cx('input-checkbox-container')}>
      <input id={name.toString()} className={cx('form-control')} type='radio' value={id} {...register} />
      <label className={cx('input-checkbox-label')} htmlFor={name.toString()}>
        {name}
      </label>
    </div>
  )
}

export default InputCheckBox

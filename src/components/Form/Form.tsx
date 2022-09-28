import React, { FC } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import classNames from 'classnames/bind'
import style from './Form.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PositionInterface } from '../../api/getPositions'
import InputCheckBox from '../InputCheckBox/InputCheckBox'
import UploadInput from '../UploadInput/UploadInput'
import { createUser, Inputs } from '../../api/Users'

const cx = classNames.bind(style)

interface Props {
  positions: PositionInterface[]
}

const Form: FC<Props> = ({ positions }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await createUser(data).then((res) => console.log(res))
  }

  return (
    <form className={cx('form-container')} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx('form-input-container')}>
        <Input
          label='Your name'
          register={register('name', {
            required: { value: true, message: 'you must enter name' },
            minLength: { value: 2, message: 'value must be bigger than 2' },
            maxLength: { value: 60, message: 'value must be less than 60' },
          })}
        />
        {errors.name && <div className={cx('form-input-error')}>{errors?.name?.message}</div>}
      </div>
      <div className={cx('form-input-container')}>
        <Input
          label='Email'
          register={register('email', {
            required: { value: true, message: 'you must enter email' },
            minLength: { value: 2, message: 'value must be bigger than 2' },
            maxLength: { value: 100, message: 'value must be less than 100' },
            pattern: {
              value: new RegExp(
                '^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$',
              ),
              message: 'Enter current email value',
            },
          })}
        />
        {errors.email && <div className={cx('form-input-error')}>{errors?.email?.message}</div>}
      </div>
      <div className={cx('form-input-container')}>
        <Input
          label='Phone'
          register={register('phone', {
            required: { value: true, message: 'you must enter phone' },
            pattern: {
              value: new RegExp('^[+]{0,1}380([0-9]{9})$'),
              message: 'value does not current',
            },
          })}
        />
        {!errors.phone && <div className={cx('form-input-helper-text')}>+38 (XXX) XXX - XX - XX</div>}
        {errors.phone && <div className={cx('form-input-error')}>{errors?.phone?.message}</div>}
      </div>
      <div>
        <label className={cx('positions-label')} htmlFor='positions'>
          Select your position
        </label>
        <div className={cx('form-checkbox-container')}>
          {positions.map(({ id, name }) => {
            return (
              <InputCheckBox
                key={id}
                id={id}
                name={name}
                register={register('position_id', {
                  required: { value: true, message: 'you must enter position' },
                })}
              />
            )
          })}
          {errors.position_id && <div className={cx('form-input-checkbox-error')}>{errors?.position_id?.message}</div>}
        </div>
      </div>
      <div className={cx('from-upload-input')}>
        <UploadInput setValue={setValue} />
      </div>
      <div className={cx('form-submit-button')}>
        <Button text='Sign up' customStyleType='disabled' customType='submit' />
      </div>
    </form>
  )
}

export default Form

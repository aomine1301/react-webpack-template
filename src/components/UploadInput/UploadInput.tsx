import React, { FC, useState } from 'react'
import styles from './UploadInput.scss'
import classNames from 'classnames/bind'
import { UseFormSetValue } from 'react-hook-form'
import { Inputs } from '../../api/Users'

const cx = classNames.bind(styles)

interface Props {
  setValue: UseFormSetValue<Inputs>
}

const UploadInput: FC<Props> = ({ setValue }) => {
  const [value, setCustomValue] = useState<File>()
  const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files.length > 0) {
      setValue('photo', event.target.files[0], { shouldValidate: true })
      setCustomValue(event.target.files[0])
    }
  }

  return (
    <div className={cx('upload-input-container')}>
      <label className={cx('upload-input-label')} htmlFor='uploadInput'>
        Upload
        <input
          size={5}
          accept='image/jpeg'
          id='uploadInput'
          className={cx('upload-input')}
          onChange={(event) => changeValueHandler(event)}
          type='file'
          hidden
        />
      </label>
      <div className={cx('upload-input-second-half')}>{value?.name ? value?.name : 'Upload your photo'}</div>
    </div>
  )
}

export default UploadInput

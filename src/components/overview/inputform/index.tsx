import { useSelector, useDispatch } from 'react-redux'
import { addSubject } from '../../../state/reducers/semester'
import { ISubject, ESubjectType, PayloadType, ISemester } from '../../../state/state-types'
import React, { useState } from 'react'
import Select from 'react-select'
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import "./form.scss"
import { updateByType } from '../../../state/reducers/checker'

interface toggle {
  setToggle: any
}
export const InputForm: React.FC<toggle> = ({ setToggle }) => {
  const dispatch = useDispatch()
  const { register, formState: { errors }, handleSubmit, control, reset } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    const payload: PayloadType = {
      semester: data.semester.value,
      subject: {
        credit: data.credit.value,
        id: data.id,
        name: data.name,
        type: data.type.value
      }
    }
    await dispatch(addSubject(payload))
    await dispatch(updateByType())
    reset()
    setToggle(false)
  };
  return (
    <div className="form-wrapper">
      <div className="form-element">
        <div onClick={() => setToggle(false)} className='close'>x</div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='input-field'>
            <label htmlFor="id">id</label>
            <input {...register("id")} className="id" />
          </div>
          <div className='input-field'>
            <label htmlFor="name">name</label>
            <input {...register("name")} className="name" />
          </div>
          <div className='input-field'>
            <label htmlFor="type">type</label>
            <Controller
              name="type"
              control={control}
              render={({ field }) => <Select {...field} placeholder="subject type..." options={subjecttype} />}
            />

          </div>
          <div className='input-field-credit'>
            <div className='element-wrapper'>
              <label htmlFor="semester">semester</label>
              <Controller
                name="semester"
                control={control}
                render={({ field }) => <Select {...field} placeholder="semester..." options={semester} />}
              />

            </div>
            <div className='element-wrapper'>
              <label htmlFor="credit">credit</label>
              <Controller
                name="credit"
                control={control}
                render={({ field }) => <Select {...field} placeholder="credit..." options={credit} />}
              />
            </div>

          </div>
          <div className='button-wrapper' >
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div >
  )
}

const semester = [
  { value: 1, label: "semester 1" },
  { value: 2, label: "semester 2" },
  { value: 3, label: "semester 3" },
  { value: 4, label: "semester 4" },
  { value: 5, label: "semester 5" },
  { value: 6, label: "semester 6" },
]
const credit = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },

]
const subjecttype = [
  { value: ESubjectType.MAIN, label: ESubjectType.MAIN },
  { value: ESubjectType.SOFTWARE, label: ESubjectType.SOFTWARE },
  { value: ESubjectType.NETWORK, label: ESubjectType.NETWORK },
  { value: ESubjectType.HARDWARE, label: ESubjectType.HARDWARE },
  { value: ESubjectType.PROJECT, label: ESubjectType.PROJECT },
  { value: ESubjectType.ENGLISH, label: ESubjectType.ENGLISH },
  { value: ESubjectType.HUMEN, label: ESubjectType.HUMEN },
  { value: ESubjectType.MAIN, label: ESubjectType.MAIN },
  { value: ESubjectType.SOCIETY, label: ESubjectType.SOCIETY },
]
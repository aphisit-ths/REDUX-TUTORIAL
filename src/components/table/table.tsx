import React, { useEffect } from 'react'
import { RootState } from '../../state'
import { useSelector, useDispatch } from 'react-redux'
import { addSubject } from '../../state/reducers/semester'
import { PayloadType } from '../../state'
import Select from 'react-select'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { updateByType } from '../../state/reducers/checker'
import { credit, semester, subjecttype } from "./utils"
import _ from "underscore"
import { RowOfTable } from './RowOfTable'

import "./table.scss"
const Table: React.FC = () => {
  const dispatch = useDispatch()
  const { register, formState: { errors }, handleSubmit, control, reset } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (input) => {
    const payload: PayloadType = {
      semester: input.semester.value,
      subject: {
        credit: input.credit.value,
        id: input.id,
        name: input.name,
        type: input.type.value
      }
    }
    await dispatch(addSubject(payload))
    await dispatch(updateByType())
    reset()
  };

  return (
    <div className='table-page'>
      <form className='table-wrapper' onSubmit={handleSubmit(onSubmit)} >
        <div>
          <h1>Courses</h1>
          <p>course that your enroll !</p>
        </div>
        <div className='table'>
          <div className='table-header'>
            <p>id</p>
            <p>name</p>
            <p>credit</p>
            <p>action</p>
          </div>
          {/* <div className='table-header'>
            <td>
              <p > <input {...register("id")} className="id" /></p>
            </td>
            <td>
              <p>  <input {...register("name")} className="name" /></p>
            </td>
            <td>
              <p><Controller
                name="type"
                control={control}
                render={({ field }) => <Select {...field} placeholder="subject type..." options={subjecttype} />}
              /></p>
            </td>
            <td>
              <Controller
                name="semester"
                control={control}
                render={({ field }) => <Select {...field} placeholder="semester..." options={semester} />}
              />
            </td>
            <td>
              <p>    <Controller
                name="credit"
                control={control}
                render={({ field }) => <Select {...field} placeholder="credit..." options={credit} />}
              /></p>
            </td>
            <td>
              <button type="submit">submit</button>
            </td>
          </div > */}

          <RowOfTable />

        </div >
      </form >
    </div>

  )
}

export default Table
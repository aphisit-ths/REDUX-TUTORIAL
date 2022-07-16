import React from 'react'
import { useDispatch } from 'react-redux'
import { addSubject } from '../../state/reducers/semester'
import { PayloadType } from '../../state'
import Select from 'react-select'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { updateByType } from '../../state/reducers/checker'
import { credit, semester, subjecttype } from "./utils"
import { RowOfTable } from './RowOfTable'
import { Link } from "react-router-dom";


import "./table.scss"
const Table: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, control, reset } = useForm<any>();

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
          <Link to={"/"} >{"< Back"}</Link >
          <h1>Courses</h1>
          <p>course that your enroll !</p>
        </div>
        <div className='table'>
          <div className='input-field'>
            <input {...register("id")} placeholder={"id"} className="id" />
            <input {...register("name")} placeholder={"name"} className="name" />
            <div className='dropdown'>
              <Controller
                name="type"
                control={control}
                render={({ field }) => <Select {...field} placeholder="subject type..." options={subjecttype} />}
              />
            </div>
            <div className='dropdown'>
              <Controller
                name="semester"
                control={control}
                render={({ field }) => <Select {...field} placeholder="semester..." options={semester} />}
              />
            </div>
            <div className='dropdown'>
              <Controller
                name="credit"
                control={control}
                render={({ field }) => <Select {...field} placeholder="credit..." options={credit} />}
              />
            </div>
            <button type="submit">Add</button>
          </div>
          <div className='table-header'>
            <p>id</p>
            <p>name</p>
            <p>credit</p>
            <p>action</p>
          </div>
          <RowOfTable />
        </div >
      </form >
    </div>

  )
}

export default Table

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

import "./table.scss"
const Table: React.FC = () => {
  const dispatch = useDispatch()

  const { data } = useSelector((state: RootState) => state.semester)
  var sorted_data = _.sortBy(data, "semester")

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
    <form className='table-page' onSubmit={handleSubmit(onSubmit)} >
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>type</th>
            <th>semester</th>
            <th>credit</th>
            <th>action</th>
          </tr>
        </thead>
        <tr>
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
        </tr>
        {sorted_data.map((data, i) => (
          <>
            <tr>
              <td className='semester'>semester : {data.semester}</td>
            </tr>
            {data.subjects.map((e, i) => (
              <tr key={i}>
                <td>
                  <p >{e.id}</p>
                </td>
                <td>
                  <p> {e.name}</p>
                </td>
                <td>
                  <p>{e.type}</p>
                </td>
                <td>
                  <p>{data.semester}</p>
                </td>
                <td>
                  <p>{e.credit}</p>
                </td>
                <td>
                  <p>Delelte</p>
                </td>
              </tr>
            ))}
          </>
        ))}
      </table>
    </form >
  )
}

export default Table
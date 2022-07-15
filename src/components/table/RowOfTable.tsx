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


export const RowOfTable: React.FC = () => {

  const { data } = useSelector((state: RootState) => state.semester)
  var sorted_data = _.sortBy(data, "semester")

  return (<>
    {sorted_data.map((data, i) => (
      <>
        <div className='semester-divider'>
          <p className='semester'>semester : {data.semester}</p>
        </div>
        {data.subjects.map((e, i) => (
          <div className='row' key={i}>
            <p >{e.id}</p>
            <div className='name-type'>
              <p> {e.name}</p>
              <span>{e.type}</span>
            </div>
            <p>{e.credit}</p>
            <p>Delelte</p>
          </div>
        ))}
      </>
    ))}
  </>
  )
}
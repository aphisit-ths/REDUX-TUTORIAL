import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../state'
import { addSubject, } from '../state/reducers/semester'
import { ISubject, ESubjectType, IInputdata, ISemester } from '../state/state-types'


const ReduxToolkits: React.FC = () => {
  const dispatch = useDispatch()


  const { data, error } = useSelector((state: RootState) => state.semester)
  console.log(data)



  const english: IInputdata = {
    semester: 7,
    subject: {
      id: "002",
      credit: 3,
      name: "english5555",
      type: ESubjectType.ENGLISH
    }
  }

  return (
    <div>
      <h1>All Credit :</h1>
      <button onClick={() => dispatch(addSubject(english))} >ADDD</button>
      {/* {subject.length === 0 && <div>Subject not allow ! Please Add </div>}
    

      {subject.map((subject, i) => (
        <>
          <li key={subject.id}>{subject.name}</li>
        </>
      ))} */}
    </div>
  )
}


export default ReduxToolkits
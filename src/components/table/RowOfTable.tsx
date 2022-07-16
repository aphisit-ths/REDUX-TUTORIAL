import React from 'react'
import { RootState } from '../../state'
import { useSelector, useDispatch } from 'react-redux'
import { removeSubject } from '../../state/reducers/semester'
import _ from "underscore"


export const RowOfTable: React.FC = () => {

  const { data } = useSelector((state: RootState) => state.semester)
  var sorted_data = _.sortBy(data, "semester")

  const dispatch = useDispatch()

  return (
    <>
      {sorted_data.map((data, idx) => (
        <>
          {data.subjects.length > 0 &&
            <>
              <div className='semester-divider'>
                <p className='semester'>semester : {data.semester}</p>
              </div>
            </>}

          {data.subjects.map((e, i) => (
            <div className='row' key={i}>
              <p >{e.id}</p>
              <div className='name-type'>
                <p> {e.name}</p>
                <span>{e.type}</span>
              </div>
              <p>{e.credit}</p>
              <div className='remove-button' onClick={() => { dispatch(removeSubject({ "sem_idx": idx, "sub_idx": i })) }}>Remove</div>
            </div>
          ))}
        </>
      ))}
    </>
  )
}
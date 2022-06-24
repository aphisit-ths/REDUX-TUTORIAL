import React from 'react'
import { ISemester, ISubject } from "../../state/state-types"

interface ISemesterPage {
  semester: number
  subjects: ISubject[]
}
export const SemesterPage: React.FC<ISemesterPage> = ({ semester, subjects }) => {

  return (
    <div key={semester}>
      <h1>Semester :{semester}</h1>
      {subjects.map((subject, i) => (
        <>
          <ul key={i}>
            <li>id:{subject.id}</li>
            <li>
              name:{subject.name}
            </li>
            <li>
              type:{subject.type}
            </li>
            <li>
              credit:{subject.credit}
            </li>
          </ul>

        </>
      ))}
    </div>
  )
}
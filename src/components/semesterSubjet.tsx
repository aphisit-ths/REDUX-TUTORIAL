import React from 'react'
import { ISemester, ISubject } from "../state/state-types"

interface ISemesterPage {
  semester: number
  subjects: ISubject[]
}
export const SemesterPage: React.FC<ISemesterPage> = ({ semester, subjects }) => {

  return (
    <div>
      <h1>Semester :{semester}</h1>
      {subjects.map((subject, i) => (
        <>
          <ul>
            <li>{subject.id}</li>
            <li>
              {subject.name}
            </li>
          </ul>

        </>
      ))}
    </div>
  )
}
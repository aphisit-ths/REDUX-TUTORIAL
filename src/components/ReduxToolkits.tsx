import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../state'
import { addSubject, } from '../state/reducers/semester'
import { ISubject, ESubjectType, IInputdata, ISemester } from '../state/state-types'
import { SemesterPage } from './semesterSubjet'


const ReduxToolkits: React.FC = () => {
  const dispatch = useDispatch()
  const [id, setid] = useState<string>("")
  const [name, setname] = useState<string>("")
  const [sem, setsem] = useState<number>(1)
  const [credit, setcredit] = useState<number>(3)
  const [type, settype] = useState<string>("")


  const { data, error } = useSelector((state: RootState) => state.semester)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const info: IInputdata = {
        semester: sem,
        subject: {
          id: id,
          name: name,
          credit: credit,
          type: type
        }
      }
      dispatch(addSubject(info))
    } catch (error) {

    }
    setid("")
    setname("")
    setsem(1)
    setcredit(3)
    settype("")
  }
  return (
    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>hi form new folder</h1>
      <form onSubmit={onSubmit} style={{ display: 'flex', justifyContent: "center", alignItems: "start", flexDirection: "column", gap: "10px" }} >
        <div>
          <label >รหัส</label>
          <input required onChange={(event) => setid(event.target.value)} value={id} type="text" name="id" id="id" />
        </div>
        <div>
          <label >ชื่อ</label>
          <input required onChange={(event) => setname(event.target.value)} value={name} type="text" name="name" id="name" />
        </div>
        <div>
          <label >credit :</label>
          <select required defaultValue={3} onChange={(event) => setcredit(parseInt(event.target.value))} value={credit} name="credit" id="credit">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div>
          <label >semester :</label>
          <select required defaultValue={1} onChange={(event) => setsem(parseInt(event.target.value))} value={sem} name="semester" id="semester">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <div>
          <label >type :</label>
          <select required onChange={(event) => settype(event.target.value)} value={type} name="type" id="type">
            <option value={ESubjectType.MAIN}>{ESubjectType.MAIN}</option>
            <option value={ESubjectType.SOFTWARE}>{ESubjectType.SOFTWARE}</option>
            <option value={ESubjectType.NETWORK}>{ESubjectType.NETWORK}</option>
            <option value={ESubjectType.HARDWARE}>{ESubjectType.HARDWARE}</option>
            <option value={ESubjectType.PROJECT}>{ESubjectType.PROJECT}</option>
            <option value={ESubjectType.ENGLISH}>{ESubjectType.ENGLISH}</option>
            <option value={ESubjectType.HUMEN}>{ESubjectType.HUMEN}</option>
            <option value={ESubjectType.MATHSCI}>{ESubjectType.MATHSCI}</option>
            <option value={ESubjectType.SOCIETY}>{ESubjectType.SOCIETY}</option>
            <option value={ESubjectType.FREE}>{ESubjectType.FREE}</option>
          </select>
        </div>
        <button >ADDD</button>

      </form>

      {data.length === 0 && <div>Subject not allow ! Please Add </div>}
      {data.map((sem, i) => (<>
        <SemesterPage semester={sem.semester} subjects={sem.subjects} />
      </>)
      )}



    </div>
  )
}


export default ReduxToolkits
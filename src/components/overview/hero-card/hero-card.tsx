import React, { useEffect, useState } from "react"
import "./hero-card.scss"
import { RootState } from "../../../state"
import { useSelector, useDispatch } from "react-redux"
import { updateByType } from "../../../state/reducers/checker"

export const HeroCard: React.FC = () => {
  const { data, error } = useSelector((state: RootState) => state.semester)

  const checker = useSelector((state: RootState) => state.checker)
  const dispatch = useDispatch()
  const [sumOfCredit, setsumOfCredit] = useState<number>(0)
  const amountCredit = (): number => {
    var arr: number[] = []
    for (let index = 0; index < data.length; index++) {
      const semesterCredit: number = data[index].subjects.reduce((prev, curr) => {
        return prev + curr.credit
      }, 0)
      arr.push(semesterCredit)
    }
    const result: number = arr.reduce((prev, curr) => {
      return prev + curr
    }, 0)
    return result
  }

  useEffect(() => {
    const amount = amountCredit()
    setsumOfCredit(amount)
  }, [data])

  return (
    <div className="hero-card">
      <div className="content-text" >
        <div className="hero-section">
          <div className="hero-score">
            <h1>{sumOfCredit}</h1>
            <p >Total <span>Credit</span></p>
          </div>
        </div>
        <div className="hero-status">
          <div className="status-warper">
            <div className="marker" style={{ backgroundColor: `${sumOfCredit >= 133 ? "#97C4B8" : "#ff7878"}` }}></div>
            <div className="status-text">{sumOfCredit >= 133 ? "Completed" : "Incomplete"}</div>
          </div>
        </div>
      </div>
      <div className="content-slider" >
        <div className="slider-wrapper">
          <div className="slider" style={{ width: `${sumOfCredit * 100 / 133}%` }} >
            <div className="marker" ></div>
          </div>
        </div>
        <div className="roadmap" >
          <p>0</p>
          <p>133</p>
        </div>
      </div>
    </div>
  )
}
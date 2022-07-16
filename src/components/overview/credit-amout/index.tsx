import { useSelector } from "react-redux"
import { ISubject, RootState } from "../../../state"
import { citeria, ICompareAmountSubject, FilterStatus, ToggleState } from "./state.interfaces"
import { useState } from "react"
import { AllElements, CompletedElements, InCompleteElements } from "./elements/elements"
import { Link } from "react-router-dom"
import Select from "react-select"
import "./amount.scss"


export const AmountByType: React.FC = () => {

  const [filter, setFilter] = useState<ToggleState>(FilterStatus.ALL)

  const data = useSelector((state: RootState) => state.checker)
  function getSumOfCredit(array: ISubject[], type: string): ICompareAmountSubject {
    const sum = array.reduce((prev, curr) => {
      return prev + curr.credit
    }, 0)
    const citeria_val = citeria[type as keyof typeof citeria]
    const result = { amount: sum, citeria: citeria_val, isCompleted: sum >= citeria_val, name: type }
    return result
  }

  const amountByTypes = Object.keys(data).map((type) => {
    return getSumOfCredit(data[type as keyof typeof data], type)
  })


  const options = [
    { value: FilterStatus.ALL, label: FilterStatus.ALL },
    { value: FilterStatus.COMPLETED, label: FilterStatus.COMPLETED },
    { value: FilterStatus.INCOMPLETE, label: FilterStatus.INCOMPLETE }
  ]

  return (
    <section className="amount-section">
      <div className="selector">
        <Select onChange={(e) => { setFilter(e?.value) }} options={options}></Select>
        <Link to={"/jajobyang/table"}>
          <p >
            View course
          </p>
        </Link >

      </div>
      <div className="elements-section" >
        {filter === FilterStatus.ALL && <AllElements data={amountByTypes} />}
        {filter === FilterStatus.COMPLETED && <CompletedElements data={amountByTypes} />}
        {filter === FilterStatus.INCOMPLETE && <InCompleteElements data={amountByTypes} />}
      </div>
    </section>
  )
}



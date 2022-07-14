import { IAmountCredit, ICompareAmountSubject } from "../state.interfaces"

interface IProps {
  data: IAmountCredit
}
type TypeCard = { data: ICompareAmountSubject, index: number }


const CardElements: React.FC<TypeCard> = ({ data: { amount, citeria, isCompleted, name }, index }) => {
  return (<div className="elements" key={index}>
    <div className="element-status" >
      <div className="dot" style={{ backgroundColor: `${isCompleted ? "#97C4B8" : "#FF7878"}` }}></div>
      <p>{isCompleted ? "Completed" : "Incomplete"}</p>
    </div>
    <div className="hero-content">
      <h1 className="type-name">{name.toLocaleLowerCase()}</h1>
      <div className="amount-group">
        <div className="amount-wrapper" style={{ backgroundColor: `${isCompleted ? "#97C4B8" : "#ffd9c0"}` }} >
          <p style={{ color: `${isCompleted ? "#2F8F9D" : "#ff7979"}` }} >  {amount}</p>
        </div>
        <p>From {citeria} Credit</p>
      </div>
    </div>
  </div>)
}
export const AllElements: React.FC<IProps> = ({ data }) => {

  return <div className="elements-wraper">
    {data.map((ele, i) => (

      <CardElements data={ele} index={i} key={i} />
    ))}
  </div>
}
export const InCompleteElements: React.FC<IProps> = ({ data }) => {
  const maping = data.filter(ele => ele.isCompleted === false).map((ele, i) => (
    <CardElements data={ele} index={i} />
  ))
  return <div className="elements-wraper">{maping}</div>
}
export const CompletedElements: React.FC<IProps> = ({ data }) => {
  const maping = data.filter(ele => ele.isCompleted === true).map((ele, i) => (
    <CardElements data={ele} index={i} />
  ))
  return <div className="elements-wraper">{maping}</div>
}
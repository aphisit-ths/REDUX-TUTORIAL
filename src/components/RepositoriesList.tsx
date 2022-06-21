import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RootState } from "../state";

export const RepositoriesList: React.FC = () => {

  const { searchRepositories } = useAction();
  const [term, setTerm] = useState("")
  const { data, error, loading } = useTypedSelector((state: RootState) => state.reducer.repositories)

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button >Search</button>
      </form>
      <div>
        {error && (<h3> Error </h3>)}
        {loading && (<h3> loading.. </h3>)}

        <ul>
          {data.length === 0 ? <h2>not found</h2> : data.map((el, i) => (
            <>
              <li key={i}>{el}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}
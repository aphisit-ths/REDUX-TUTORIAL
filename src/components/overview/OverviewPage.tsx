import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../state'
import { addSubject, } from '../../state/reducers/semester'
import { ISubject, ESubjectType, PayloadType, ISemester } from '../../state/state-types'
import { HeroCard } from './hero-card/hero-card'
import { InputForm } from './inputform'
const OverviewPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', paddingTop: '20px', alignItems: "center", flexDirection: "column", minHeight: "100vh" }}>
      <HeroCard />
    </div>
  )
}


export default OverviewPage
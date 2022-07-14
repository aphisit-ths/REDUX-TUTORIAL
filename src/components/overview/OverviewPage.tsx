import React, { useState, useEffect } from 'react'
import { AmountByType } from './credit-amout'
import { HeroCard } from './hero-card/hero-card'
import Table from "../table/table";
import { useDispatch } from 'react-redux'
import { addSubject } from '../../state/reducers/semester';
const OverviewPage: React.FC = () => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  return (
    <div style={{ display: 'flex', paddingTop: '20px', alignItems: "center", flexDirection: "column", minHeight: "100vh" }}>
      <button onClick={() => setToggle(!toggle)}>Show Table</button>
      {toggle && <Table />}
      <HeroCard />
      <AmountByType />
    </div>
  )
}


export default OverviewPage

export const my = [
  { semester: 1, subject: { id: '1076004', name: 'OBJECT ORIENTED PROGRAMMING	', type: 'MAIN', credit: 3 } },
  { semester: 1, subject: { id: '1076006', name: 'DIGITAL SYSTEM FUNDAMENTALS	', type: 'MAIN', credit: 4 } },
  { semester: 1, subject: { id: '1076012', name: 'DISCRETE STRUCTURE', type: 'MAIN', credit: 3 } },
  { semester: 1, subject: { id: '90201035', name: 'WRITING AND SPEAKING ', type: 'ENGLISH', credit: 3 } },
  { semester: 1, subject: { id: '90302011', name: 'PSYCHOLOGY OF THINKING', type: 'HUMEN', credit: 3 } },
  { semester: 2, subject: { id: '1076005', name: 'DATA STRUCTURES', type: 'MAIN', credit: 3 } },
  { semester: 2, subject: { id: '1076010', name: 'COMPUTER NETWORKS	', type: 'MAIN', credit: 4 } },
  { semester: 2, subject: { id: '1076032', name: 'LINEAR ALGEBRA', type: 'MAIN', credit: 3 } },
  { semester: 2, subject: { id: '90201001', name: '	FOUNDATION ENGLISH 1', type: 'ENGLISH', credit: 3 } },
  { semester: 2, subject: { id: '90402011', name: 'ENGINEERING LAWS', type: 'SOCIETY', credit: 3 } },
  { semester: 3, subject: { id: '1076008', name: 'SDP', type: 'MAIN', credit: 4 } },
  { semester: 3, subject: { id: '1076011', name: 'OPERATING SYSTEMS', type: 'MAIN', credit: 3 } },
  { semester: 3, subject: { id: '1076027 ', name: 'IST', type: 'NETWORK', credit: 4 } },
  { semester: 3, subject: { id: '1076263', name: 'DATABASE SYSTEMS', type: 'MAIN', credit: 3 } },
  { semester: 3, subject: { id: '1076568 ', name: 'HCI', type: 'CEINTERREST', credit: 3 } },
  { semester: 3, subject: { id: '90201020', name: 'ENGLISH FOR INDUSTRY', type: 'ENGLISH', credit: 3 } },
  { semester: 4, subject: { id: '1076009', name: 'COMPUTER ORG', type: 'MAIN', credit: 4 } },
  { semester: 4, subject: { id: '1076013', name: 'THEORY OF COMPUTATION', type: 'MAIN', credit: 3 } },
  { semester: 4, subject: { id: '1076024', name: 'SOFTWARE ARCHITECTURE', type: 'SOFTWARE', credit: 4 } },
  { semester: 4, subject: { id: '1076025', name: 'SOFTWARE STUDIO', type: 'SOFTWARE', credit: 3 } },
  { semester: 4, subject: { id: '1076532', name: 'MACHINE LEARNING', type: 'CEINTERREST', credit: 3 } },
  { semester: 4, subject: { id: '90201039', name: 'ENGLISH  ENTERTAINMENT ', type: 'ENGLISH', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'CALCULUS', type: 'MAIN', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'PROJECT 1', type: 'PROJECT', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'UX-UI', type: 'SOFTWARE', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'CE-PD', type: 'MAIN', credit: 2 } },
  { semester: 5, subject: { id: '0000000', name: 'SPA', type: 'NETWORK', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'BIG DATA OR DEEP LEARNING', type: 'CEINTERREST', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'หมวดสังคม', type: 'SOCIETY', credit: 3 } },
];

export const year1_2 = [
  { semester: 2, subject: { id: '1076005', name: 'DATA STRUCTURES', type: 'MAIN', credit: 3 } },
  { semester: 2, subject: { id: '1076010', name: 'COMPUTER NETWORKS	', type: 'MAIN', credit: 4 } },
  { semester: 2, subject: { id: '1076032', name: 'LINEAR ALGEBRA', type: 'MAIN', credit: 3 } },
  { semester: 2, subject: { id: '90201001', name: '	FOUNDATION ENGLISH 1', type: 'ENGLISH', credit: 3 } },
  { semester: 2, subject: { id: '90402011', name: 'ENGINEERING LAWS', type: 'SOCIETY', credit: 3 } },
];

export const year2_1 = [
  { semester: 3, subject: { id: '1076008', name: 'SDP', type: 'MAIN', credit: 4 } },
  { semester: 3, subject: { id: '1076011', name: 'OPERATING SYSTEMS', type: 'MAIN', credit: 3 } },
  { semester: 3, subject: { id: '1076027 ', name: 'IST', type: 'NETWORK', credit: 4 } },
  { semester: 3, subject: { id: '1076263', name: 'DATABASE SYSTEMS', type: 'MAIN', credit: 3 } },
  { semester: 3, subject: { id: '1076568 ', name: 'HCI', type: 'CEINTERREST', credit: 3 } },
  { semester: 3, subject: { id: '90201020', name: 'ENGLISH FOR INDUSTRY', type: 'ENGLISH', credit: 3 } },
];

export const year2_2 = [
  { semester: 4, subject: { id: '1076009', name: 'COMPUTER ORG', type: 'MAIN', credit: 4 } },
  { semester: 4, subject: { id: '1076013', name: 'THEORY OF COMPUTATION', type: 'MAIN', credit: 3 } },
  { semester: 4, subject: { id: '1076024', name: 'SOFTWARE ARCHITECTURE', type: 'SOFTWARE', credit: 4 } },
  { semester: 4, subject: { id: '1076025', name: 'SOFTWARE STUDIO', type: 'SOFTWARE', credit: 3 } },
  { semester: 4, subject: { id: '1076532', name: 'MACHINE LEARNING', type: 'CEINTERREST', credit: 3 } },
  { semester: 4, subject: { id: '90201039', name: 'ENGLISH  ENTERTAINMENT ', type: 'ENGLISH', credit: 3 } },
];
export const year3_1 = [
  { semester: 5, subject: { id: '0000000', name: 'CALCULUS', type: 'MAIN', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'PROJECT 1', type: 'PROJECT', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'UX-UI', type: 'SOFTWARE', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'CE-PD', type: 'MAIN', credit: 2 } },
  { semester: 5, subject: { id: '0000000', name: 'SPA', type: 'NETWORK', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'BIG DATA', type: 'CEINTERREST', credit: 3 } },
  { semester: 5, subject: { id: '0000000', name: 'หมวดสังคม', type: 'SOCIETY', credit: 3 } },
];

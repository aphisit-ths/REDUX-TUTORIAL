import { IAllSemester, ISubject } from './../state-types/index';
import { createSlice } from '@reduxjs/toolkit';

const getSemester = (): undefined | IAllSemester => {
  const allsemester = localStorage.getItem('data');
  if (allsemester) {
    return JSON.parse(allsemester);
  }
};

export interface IGroupSubjectByType {
  MAIN: ISubject[];
  SOFTWARE: ISubject[];
  NETWORK: ISubject[];
  HARDWARE: ISubject[];
  PROJECT: ISubject[];
  CEINTERREST: ISubject[];
  ENGLISH: ISubject[];
  HUMEN: ISubject[];
  MATHSCI: ISubject[];
  SOCIETY: ISubject[];
  FREE: ISubject[];
}
const initialState: IGroupSubjectByType = {
  MAIN: [],
  SOFTWARE: [],
  NETWORK: [],
  HARDWARE: [],
  PROJECT: [],
  CEINTERREST: [],
  ENGLISH: [],
  HUMEN: [],
  MATHSCI: [],
  SOCIETY: [],
  FREE: [],
};

export const checkerSlice = createSlice({
  name: 'checker',
  initialState: initialState,
  reducers: {
    updateByType: (state) => {
      const semesters = getSemester();
      const subjectsArr: ISubject[] = [];
      if (semesters) {
        Object.keys(semesters.data).forEach((key, index) => {
          subjectsArr.push(...semesters.data[index].subjects);
        });
      }

      Object.entries(initialState).forEach(([key, index]) => {
        const subject_type: ISubject[] = subjectsArr.filter(
          (subject: ISubject) => {
            return subject.type === key;
          }
        );
        state[key as keyof typeof initialState] = subject_type;
      });
    },
  },
});

export const { updateByType } = checkerSlice.actions;
export default checkerSlice.reducer;

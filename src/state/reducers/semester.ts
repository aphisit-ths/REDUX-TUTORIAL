import { Action } from './../actions/index';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { IAllSemester, PayloadType } from '../state-types';
import { indexOf } from 'underscore';

const semesterInitState: IAllSemester = {
  data: [],
  error: null,
};

const localStrorageCheck = () => {
  const isLocalStorageAlready = localStorage.getItem('data');
  if (!isLocalStorageAlready) {
    return semesterInitState;
  } else {
    const parsed = JSON.parse(isLocalStorageAlready);
    return parsed;
  }
};

const initailState: IAllSemester = localStrorageCheck();

interface IRemoveSubject {
  sem_idx: number;
  sub_idx: number;
}

export const semesterSlice = createSlice({
  name: 'semester',
  initialState: initailState,
  reducers: {
    removeSubject: (state: IAllSemester, Action) => {
      const payload: IRemoveSubject = Action.payload;
      console.log(payload);
      state.data[payload.sem_idx].subjects.splice(payload.sub_idx, 1);
      localStorage.setItem('data', JSON.stringify(state));
    },
    addSubject: (state: IAllSemester, action) => {
      const input: PayloadType = action.payload;
      const isAlreadySemester = state.data.findIndex((sem) => {
        return sem.semester === input.semester;
      });

      if (isAlreadySemester === -1) {
        state.data.push({
          semester: input.semester,
          subjects: [{ ...input.subject }],
        });
      }
      if (isAlreadySemester >= 0) {
        state.data[isAlreadySemester].subjects.push({
          ...input.subject,
        });
      }
      localStorage.setItem('data', JSON.stringify(state));
    },
  },
});

export const { addSubject, removeSubject } = semesterSlice.actions;
export default semesterSlice.reducer;

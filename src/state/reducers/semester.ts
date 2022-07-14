import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { IAllSemester, PayloadType } from '../state-types';

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

export const semesterSlice = createSlice({
  name: 'semester',
  initialState: initailState,
  reducers: {
    addSubject: (state, action) => {
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

export const { addSubject } = semesterSlice.actions;
export default semesterSlice.reducer;

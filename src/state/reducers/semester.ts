import { createSlice } from '@reduxjs/toolkit';

import { IAllSemester, IInputdata } from '../state-types';

const semesterInitState: IAllSemester = {
  data: [{ semester: 0, subjects: [] }],
  error: null,
};

export const semesterSlice = createSlice({
  name: 'semester',
  initialState: semesterInitState,
  reducers: {
    addSubject: (state, action) => {
      const input: IInputdata = action.payload;
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
    },
  },
});

export const { addSubject } = semesterSlice.actions;
export default semesterSlice.reducer;

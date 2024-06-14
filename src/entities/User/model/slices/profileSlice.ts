import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fakeProfileData } from '../../mocks/data';
import { ProfileData, ProfileSchema } from '../types/profileTypes';
import { login, logout } from './userSlice';

const initialState: ProfileSchema = {
  profileData: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, { payload }: PayloadAction<ProfileData>) => {
      state.profileData = payload;
    },
    resetProfileData: (state) => {
      state.profileData = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(login, (state, { type, payload }) => {
        if (payload) {
          profileSlice.caseReducers.setProfileData(state, { type, payload: fakeProfileData });
        } else {
          profileSlice.caseReducers.resetProfileData(state);
        }
      })
      .addCase(logout, (state) => {
        profileSlice.caseReducers.resetProfileData(state);
      }),
  selectors: {
    selectProfile: (state) => state.profileData,
  },
});

export const { setProfileData, resetProfileData } = profileSlice.actions;
export const { selectProfile } = profileSlice.selectors;
export const profileReducer = profileSlice.reducer;

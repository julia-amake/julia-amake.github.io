import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { signInRTK, signUpRTK } from 'src/widgets/Header/ui/UserBar/api/authApi';
import { fakeProfileData } from '../../mocks/data';
import { ProfileData, ProfileSchema } from '../types/profileTypes';
import { logout } from './userSlice';

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
  extraReducers: (builder) => {
    builder
      .addCase(logout, (state) => {
        profileSlice.caseReducers.resetProfileData(state);
      })
      .addMatcher(signInRTK.matchFulfilled, (state, { type, payload: { token } }) => {
        if (token) {
          profileSlice.caseReducers.setProfileData(state, { type, payload: fakeProfileData });
        } else {
          profileSlice.caseReducers.resetProfileData(state);
        }
      })
      .addMatcher(signUpRTK.matchFulfilled, (state, { type, payload: { token } }) => {
        if (token) {
          profileSlice.caseReducers.setProfileData(state, { type, payload: fakeProfileData });
        } else {
          profileSlice.caseReducers.resetProfileData(state);
        }
      });
  },
  selectors: {
    selectProfile: (state) => state.profileData,
  },
});

export const { setProfileData, resetProfileData } = profileSlice.actions;
export const { selectProfile } = profileSlice.selectors;
export const profileReducer = profileSlice.reducer;

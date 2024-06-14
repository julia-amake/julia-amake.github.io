import { ProfileData } from '../model/types/profileTypes';
import { UserData } from '../model/types/userTypes';

export const TEST_TOKEN = 'test-token';

export const fakeUserData: UserData = {
  email: 'tony.stark@starkenterprise.com',
  password: 'tony1970',
  roles: ['admin'],
};

export const fakeProfileData: ProfileData = {
  id: '1',
  name: 'Tony Stark',
  about: 'Genius, billionaire, playboy, philanthropist',
  email: 'tony.stark@starkenterprise.com',
  signUpDate: String(new Date('2008-05-02')),
  commandId: 'IronMan123',
};

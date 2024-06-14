export interface ProfileData {
  id: string;
  name?: string;
  about?: string;
  email: string;
  signUpDate: string;
  commandId?: string;
}

export interface ProfileSchema {
  profileData: ProfileData | null;
}

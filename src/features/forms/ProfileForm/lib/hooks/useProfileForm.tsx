import { useCallback, useMemo } from 'react';
import { useFormik } from 'formik';
import { FormikErrors, FormikHelpers } from 'formik/dist';
import { selectProfile, setProfileData } from 'src/entities/User';
import { useAppDispatch, useAppSelector } from 'src/shared/lib/hooks';
import { isNotDefinedString } from 'src/shared/lib/utils/validation/common';
import { ProfileFormValues } from '../../ui/ProfileForm/ProfileForm';

type ProfileFormErrors = FormikErrors<ProfileFormValues>;

export const useProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  const initialValues: ProfileFormValues = useMemo(
    () => ({
      name: profile?.name || '',
      about: profile?.about || '',
    }),
    [profile?.about, profile?.name]
  );

  const onSubmit = useCallback(
    (values: ProfileFormValues, { resetForm }: FormikHelpers<ProfileFormValues>) => {
      if (profile) {
        dispatch(setProfileData({ ...profile, ...values }));
      }
      resetForm({ values: initialValues });
    },
    [dispatch, initialValues, profile]
  );

  const validate = useCallback((values: ProfileFormValues) => {
    const errors: ProfileFormErrors = {};
    if (isNotDefinedString(values.name)) {
      errors.name = 'Обязательное поле';
    }
    return errors;
  }, []);

  return useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
    enableReinitialize: true,
  });
};

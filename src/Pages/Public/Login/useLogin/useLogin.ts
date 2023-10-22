import { useMutation, ApolloError } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { FormValues } from './useLogin.types'
import { useNavigate } from 'react-router-dom';
import { SignInDocument } from '@/types';

export const useLogin = () => {
  const navigate = useNavigate();
  const [fetch] = useMutation(SignInDocument, {
    onCompleted: ({ signIn }) => handleOnCompleted(signIn),
    onError: (error) => handleOnError(error)
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch({
      variables: {
        data: {
          email: data.email,
          password: data.password
        }
      }
    });
  };

  const handleOnCompleted = ({ token }: { token: string }) => {
    localStorage.setItem('token', token);
    navigate('/admin/tournament');
  };

  const handleOnError = (error: ApolloError) => {
    console.log('error', error?.message)
  };

  const defaultValues = {
    email: '',
    password: '',
  };

  return {
    onSubmit,
    defaultValues
  };

}

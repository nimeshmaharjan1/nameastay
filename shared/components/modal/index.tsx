'use client';
import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { emailRegex } from '@/shared/lib/validation.lib';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { signUp } from '@/features/user/services/auth.service';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
  email: z.string().min(1, { message: 'Email is required.' }).regex(new RegExp(emailRegex), 'Email pattern is not valid.'),
});

const Modal: React.FC<{ id: string }> = ({ id }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });
  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess: () => {
      toast.success('User successfully created.');
    },
    onError: () => {
      toast.error('Something went wrong while trying to sign up user.');
    },
  });
  const onSubmit = handleSubmit((data) => mutate(data));
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl lg:text-2xl items-center">Welcome to Nameastay</h3>
            <label htmlFor={id} className="btn btn-ghost btn-sm btn-circle">
              <GrFormClose className="text-2xl"></GrFormClose>
            </label>
          </div>
          <p className="opacity-50 mt-1">Create an account</p>
          <form onSubmit={onSubmit} className="mt-3">
            <div className="form-control">
              <input
                {...register('email')}
                type="email"
                disabled={isLoading}
                placeholder="Email"
                className={classNames('input input-bordered w-full', {
                  'input-error': errors?.email,
                })}
              />
              <small className="label text-error">{errors?.email?.message}</small>
            </div>
            <div className="form-control">
              <input
                {...register('name')}
                type="text"
                disabled={isLoading}
                placeholder="Full Name"
                className={classNames('input input-bordered w-full', {
                  'input-error': errors?.name,
                })}
              />
              <small className="label text-error">{errors?.name?.message}</small>
            </div>
            <div className="form-control">
              <input
                {...register('password')}
                type="password"
                disabled={isLoading}
                placeholder="Password"
                className={classNames('input input-bordered w-full', {
                  'input-error': errors?.password,
                })}
              />
              <small className="label text-error">{errors?.password?.message}</small>
            </div>
            <div className="modal-action mt-3 flex-col gap-2">
              {/* <label htmlFor={id} className="btn btn-ghost">
              Back
            </label> */}
              <button
                disabled={isLoading}
                className={classNames('btn btn-primary btn-block', {
                  loading: isLoading,
                })}
                type="submit">
                Continue
              </button>
              <button
                disabled={isLoading}
                type="button"
                className="btn btn-block btn-outline gap-2 mt-2 hover:text-red-400"
                style={{ marginLeft: -1 }}>
                <AiOutlineGoogle></AiOutlineGoogle>Continue with Google
              </button>
              <button
                disabled={isLoading}
                type="button"
                className="btn btn-block btn-outline gap-2 hover:text-purple-500"
                style={{ marginLeft: -1 }}>
                <FiGithub></FiGithub>Continue with Github
              </button>
              <p className="mt-2 text-sm opacity-50 text-center">
                Already have an account? <span className="font-bold link link-hover hover:text-primary">Log In</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;

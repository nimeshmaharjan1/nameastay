'use client';
import React, { forwardRef, useImperativeHandle, Ref, useRef, useState, useEffect } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { emailRegex } from '@/shared/lib/validation.lib';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

const schema = z.object({
  password: z.string().min(1, { message: 'Password is required.' }),
  email: z.string().min(1, { message: 'Email is required.' }).regex(new RegExp(emailRegex), 'Email pattern is not valid.'),
});

export interface SignInModalRef {
  closeSignInModal: () => void;
}

const SignInModal = forwardRef<SignInModalRef, { id: string; goToSignUp: () => void }>(({ id, goToSignUp }, ref) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      console.log(callback);
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in successfully.');
        router.refresh();
        closeSignInRef.current?.click();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  });

  const closeSignInRef = useRef<HTMLLabelElement | null>(null);

  useImperativeHandle(ref, () => ({
    closeSignInModal: () => {
      if (closeSignInRef.current) {
        closeSignInRef.current.click();
        reset();
      }
    },
  }));

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl lg:text-2xl items-center">Welcome back to Nameastay</h3>
            <label ref={closeSignInRef} htmlFor={id} className="btn btn-ghost btn-sm btn-circle">
              <GrFormClose className="text-2xl"></GrFormClose>
            </label>
          </div>
          <p className="opacity-50 mt-1">Sign In</p>
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
                onClick={() => signIn('google')}
                className="btn btn-block btn-outline gap-2 mt-2 hover:text-red-400"
                style={{ marginLeft: -1 }}>
                <AiOutlineGoogle></AiOutlineGoogle>Continue with Google
              </button>
              <button
                disabled={isLoading}
                type="button"
                onClick={() => signIn('github')}
                className="btn btn-block btn-outline gap-2 hover:text-purple-500"
                style={{ marginLeft: -1 }}>
                <FiGithub></FiGithub>Continue with Github
              </button>
              <p className="mt-2 text-sm opacity-50 text-center">
                Don{"'"}t have an account?{' '}
                <span className="font-bold link link-hover hover:text-primary" onClick={goToSignUp}>
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

SignInModal.displayName = 'Sign In Modal';

export default SignInModal;

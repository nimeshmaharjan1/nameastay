'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import React, { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { User } from '@prisma/client';
import SignInModal, { SignInModalRef } from '@/features/user/components/auth/sign-in/sign-in-modal';
import SignUpModal, { SignUpModalRef } from '@/features/user/components/auth/sign-up/sign-up-modal';
import { signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

const UserMenu: FC<{ currentUser: User | null }> = ({ currentUser }) => {
  console.log({ currentUser });
  const signInRef = useRef<SignInModalRef>(null);
  const goToSignUp = () => {
    console.log('clicked got to sign up');
    if (signInRef.current) signInRef.current.closeSignInModal();
    openSignUpRef.current?.click();
  };
  const signUpRef = useRef<SignUpModalRef>(null);
  const goToSignIn = () => {
    if (signUpRef.current) signUpRef.current.closeSignUpModal();
    openSignInRef.current?.click();
  };
  const openSignInRef = useRef<HTMLLabelElement | null>(null);
  const openSignUpRef = useRef<HTMLLabelElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  //NOTE for same email with different oauth
  useEffect(() => {
    if (searchParams?.get('error') === 'OAuthAccountNotLinked') {
      toast.error('Email has already been registered with another Oauth provider.', {
        autoClose: 10000,
      });
      router.push('/');
    }
  }, [router, searchParams]);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        <div className="btn btn-ghost rounded-full capitalize" onClick={() => toast.success('hello')}>
          AirBnB your Home
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost p-1 btn-circle">
            <Image
              alt="user"
              height={500}
              width={500}
              className="rounded-full avatar online"
              src={currentUser?.image || '/images/placeholder.png'}
            />
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            {currentUser && (
              <>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>

                <li>
                  <a className="justify-between" onClick={() => signOut()}>
                    Logout
                  </a>
                </li>
              </>
            )}
            {!currentUser && (
              <>
                <li>
                  <label htmlFor="sign-in-modal" ref={openSignInRef}>
                    Sign In
                  </label>
                </li>
                <li>
                  <label htmlFor="sign-up-modal" ref={openSignUpRef}>
                    Sign Up
                  </label>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <SignInModal goToSignUp={goToSignUp} ref={signInRef} id="sign-in-modal"></SignInModal>
      <SignUpModal goToSignIn={goToSignIn} ref={signUpRef} id="sign-up-modal"></SignUpModal>
    </div>
  );
};

export default UserMenu;

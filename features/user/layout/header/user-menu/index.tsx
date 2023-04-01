'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import React, { FC } from 'react';
import Image from 'next/image';
import Modal from '@/shared/components/modal';
import { User } from '@prisma/client';

const UserMenu: FC<{ currentUser: User | null }> = ({ currentUser }) => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        <div className="btn btn-ghost rounded-full capitalize">AirBnB your Home</div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="w-10 rounded-full  avatar online">
              <Image alt="user" height={200} width={200} src="/images/placeholder.png" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <label htmlFor="sign-in-modal">Sign In</label>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
      <Modal id="sign-in-modal"></Modal>
    </div>
  );
};

export default UserMenu;

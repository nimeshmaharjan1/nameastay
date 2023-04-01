'use client';
import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const Modal: React.FC<{ id: string }> = ({ id }) => {
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
          <form className="mt-2">
            <input type="email" placeholder="Email" className="input input-bordered mb-3 w-full" />
            <input type="text" placeholder="Full Name" className="input input-bordered mb-3 w-full" />
            <input type="password" placeholder="Password" className="input input-bordered w-full" />
          </form>
          <div className="modal-action flex-col gap-2">
            {/* <label htmlFor={id} className="btn btn-ghost">
              Back
            </label> */}
            <button className="btn btn-primary btn-block">Continue</button>
            <button className="btn btn-block btn-outline gap-2 mt-2 hover:text-red-400" style={{ marginLeft: -1 }}>
              <AiOutlineGoogle></AiOutlineGoogle>Continue with Google
            </button>
            <button className="btn btn-block btn-outline gap-2 hover:text-purple-500" style={{ marginLeft: -1 }}>
              <FiGithub></FiGithub>Continue with Github
            </button>
            <p className="mt-2 text-sm opacity-50 text-center">
              Already have an account? <span className="font-bold link link-hover hover:text-primary">Log In</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

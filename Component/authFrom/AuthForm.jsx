"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@/components/ui/input";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Image from "next/image";

export default function AuthForm({
  title,
  subtitle,
  register,
  errors,
  onSubmit,
  extraContent,
  showPasswordField = true,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isImage =
    typeof title === "string" &&
    (title.endsWith(".png") ||
      title.endsWith(".jpg") ||
      title.endsWith(".jpeg") ||
      title.endsWith(".svg"));

  return (
    <div className="bg-white w-full">
      <div className="bg-[linear-gradient(#011f47,#001530)] pt-40 pb-15 grid justify-center w-full">
        <h1 className="md:text-3xl text-xl font-bold text-white">
          Already Using <span className="text-amber-400">TakeOff Travel?</span>
        </h1>
        <p className="mt-8 text-white text-center">
          Sign in here to your account
        </p>
      </div>

      <div className="bg-gray-100 grid justify-center">
        <form
          onSubmit={onSubmit}
          className="fieldset mt-20 mb-20 bg-white rounded-box border p-3 md:px-20 md:pb-10 md:pt-2 w-xs md:w-lg"
        >
          {/* Header image */}
          {isImage && (
            <div className="text-center mt-20 mb-6">
              <Image
                height={150}
                width={150}
                src={`/${title}`}
                alt="Auth Form Header"
                className="w-60 h-20 mx-auto"
              />
              <div className="w-full h-[2px] bg-gray-300 mx-auto mt-3 rounded-full"></div>
            </div>
          )}

          {subtitle && (
            <p className="text-black text-lg text-center mb-6">{subtitle}</p>
          )}

          {/* ✅ Email */}
          <label className="label text-black text-xl mt-4 font-mono">Email</label>
          <div className="relative w-full mt- mb-5">
            <MdEmail className="absolute h-5 w-5 left-3 top-1/3 -translate-y-1/4 text-gray-400 pointer-events-none" />
            <Input
              type="email"
              {...register("email")}
              className="bg-gray-200 w-full pl-10  placeholder:text-gray-500"
              placeholder="Email"
            />
            {errors?.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* ✅ Password */}
          {showPasswordField && (
            <>
              <label className="label text-black text-xl font-mono">
                Password
              </label>
              <div className="relative w-full">
                <RiLockPasswordFill className="absolute h-5 w-5 left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="bg-gray-200 w-full pl-10 pr-10 placeholder:text-gray-500"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {errors?.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </>
          )}

          {extraContent && <div className="mt-4">{extraContent}</div>}
        </form>
      </div>
    </div>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  extraContent: PropTypes.node,
  showPasswordField: PropTypes.bool,
};

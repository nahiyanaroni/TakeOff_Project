"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function AuthForm({
  title,
  subtitle,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  buttonText,
  extraContent,
  showPasswordField = true, 
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="bg-gray-100 grid justify-center">
        
      <form
        onSubmit={onSubmit}
        className="fieldset mt-20 mb-20 bg-white rounded-box border p-10 w-[400px]"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-[#011f47]">
          {title}
        </h1>
        {subtitle && <p className="text-gray-600 text-center mb-6">{subtitle}</p>}

        {/* ✅ Email Field */}
        <label className="label text-black text-xl font-mono">Email</label>
        <div className="relative w-full mb-5">
          <MdEmail className="absolute h-5 w-5 left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-200 w-full pl-10 placeholder:text-gray-500"
            placeholder="Email"
          />
        </div>

        {/* ✅ Password Field (optional) */}
        {showPasswordField && (
          <>
            <label className="label text-black text-xl font-mono">Password</label>
            <div className="relative w-full">
              <RiLockPasswordFill className="absolute h-5 w-5 left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-200 w-full pl-10 pr-10 placeholder:text-gray-500"
                placeholder="Password"
              />

              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </>
        )}

        {extraContent && <div className="mt-4">{extraContent}</div>}

        <Button
          type="submit"
          className="btn border-none rounded-lg bg-gradient-to-r from-[#F6AA38] to-[#FFD335] mt-6 w-full"
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  extraContent: PropTypes.node,
  showPasswordField: PropTypes.bool,
};

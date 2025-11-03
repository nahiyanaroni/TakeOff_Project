"use client";
import React, { useState } from "react";

import Link from "next/link";
import AuthForm from "@/Component/authFrom/AuthForm";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful (Demo)");
  };

  return (
    <div className="bg-white ">
      {/* Header Section */}
      <div className="bg-[linear-gradient(#011f47,#001530)] pt-40 pb-15 grid justify-center">
        <h1 className="text-3xl font-bold text-white">
          Already Using <span className="text-amber-400">TakeOff Travel?</span>
        </h1>
        <p className="mt-8 text-white text-center">
          Sign in here to your account
        </p>
      </div>

      <AuthForm
      
        title="Sign In"
        subtitle=""
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        showPassword={true}
        onSubmit={handleLogin}
        buttonText="Sign In"
        extraContent={
          
          <div className="flex justify-between items-center">
            <label className="flex items-center text-lg gap-2 text-gray-600 cursor-pointer">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(!!checked)}
                className="border-gray-400 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400"
              />
              <span htmlFor="rememberMe">Remember Me</span>
            </label>

            <Link href="/forgot" className="text-amber-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
        }
      />
    </div>
  );
}


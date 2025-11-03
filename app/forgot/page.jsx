"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthForm from "@/Component/authFrom/AuthForm";
import { Button } from "@/components/ui/button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgot = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-[linear-gradient(#011f47,#001530)] pt-40 pb-16 grid justify-center text-center">
        <h1 className="text-3xl font-bold text-white">Forgot Password?</h1>
        <p className="mt-4 text-white">
          Enter your registered email to reset your password
        </p>
      </div>

      {/* Auth Form */}
      <AuthForm
        title="Forgot Password?"
        subtitle="Enter your registered email to reset your password"
        email={email}
        setEmail={setEmail}
        password="" 
        setPassword={() => {}}
        onSubmit={handleForgot}
        buttonText="Send"
        showPasswordField={false}
        extraContent={
          <div className="flex justify-center mt-4">
            <Link href="/login">
              <Button
                type="button"
                className="btn border-none rounded-lg bg-gray-300 text-black hover:bg-gray-400"
              >
                Back to Login
              </Button>
            </Link>
          </div>
        }
      />
    </div>
  );
}

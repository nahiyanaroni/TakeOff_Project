"use client";
import React from "react";
import Link from "next/link";
import AuthForm from "@/Component/authFrom/AuthForm";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/loginSchema";
import { toast, Bounce } from "react-toastify";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  // ✅ When Send Mail button is clicked
  const handleSendMail = () => {
    toast.success("📨 Password reset please check your email!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="bg-white">
      <AuthForm
        title="Group.png"
        subtitle="Provide your registered email with takeoff to reset your password."
        onSubmit={handleSubmit(handleSendMail)} // optional form hook
        showPasswordField={false}
        register={register}
        errors={errors}
        extraContent={
          <div className="flex justify-center gap-4 mt-4">
            {/* ✅ Send Mail Button triggers toast */}
            <Button
              type="button"
              onClick={handleSendMail}
              className="btn border-none rounded-lg bg-gradient-to-r from-[#F6AA38] to-[#FFD335] text-white hover:from-[#fec775] hover:to-[#fee175]"
            >
              Send Mail
            </Button>

            <Link href="/login">
              <Button
                type="button"
                className="btn border-none rounded-lg bg-gray-300 text-black hover:bg-gray-400"
              >
                Back
              </Button>
            </Link>
          </div>
        }
      />
    </div>
  );
}

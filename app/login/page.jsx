"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import AuthForm from "@/Component/authFrom/AuthForm";
import { loginSchema } from "@/schema/loginSchema";
import { Bounce, toast } from "react-toastify";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("✅ Valid data:", data);
    toast.success("🦄 Your login was successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
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
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        buttonText="Sign In"
        extraContent={
          <div className="grid grid-cols-1 items-center">
            <div className="flex justify-between items-center mt-4">
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

            <Button
              type="submit"
              className="btn border-none rounded-lg bg-gradient-to-r from-[#F6AA38] to-[#FFD335] hover:from-[#fec775] hover:to-[#fee175] mt-6 w-full"
            >
              Sign In
            </Button>
          </div>
        }
      />
    </div>
  );
}

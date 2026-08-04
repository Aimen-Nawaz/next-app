"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/services/auth";

const loginSchema = z.object({
  email: z.email("Enter a Valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;


export default function LoginForm() {
  const [login, { isLoading, error }] = useLoginMutation();

  const { register, handleSubmit, formState: { errors }, } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });


  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log("Sending data:", data);

      const response = await login(data).unwrap();

      console.log("Login response:", response.data);

      alert(response.message)

    } catch {
      console.error(error);

      alert(
        error ?? "Something went wrong"
      );
    }
  };
  return (
    <div className="flex items-center justify-center w-full min-w-screen h-full min-h-screen">
      <div className="w-full h-fit max-w-72 md:max-w-md rounded-xl border bg-card text-card-foreground shadow-lg p-8">
        <h1 className=" text-xl md:text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-2">
          Login to your Cake & Baked account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5 mt-6 md:mt-8">
          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-2"
              {...register("email")}

            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">
              Password
            </label>

            <Input
              type="password"
              placeholder="Enter password"
              className="mt-2"
              {...register("password")}

            />

            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>)}
            <div className="flex justify-end">
              <Link
                href="/verify-email"
                className="text-primary hover:underline text-sm"
              >
                Forgot Password?
              </Link>
            </div>
          </div>



          <Button type="submit" className="w-full" disabled={isLoading}>
            Login
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
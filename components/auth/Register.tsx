"use client";

import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be atleast 2 character"),
  email: z.email("Enter a Valid email"),
  password: z.string().min(6, "Password must be atleast 6 character"),
  confirmPassword: z.string().min(6, "Please confirm your password"),
  terms: z.boolean().refine((value) => value === true, { message: "you must accept the terms and conditions," }),
})
  .refine((data) => data.password === data.confirmPassword, { message: "password do not match", path: ["confirmPassword"] })

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

  });
  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await axios.post(
        "/api/auth/register",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        }
      );
      console.log("Register Response:", response.data);
      alert("Account Created Successfully!");

    } catch (error: any) {
      console.log("Register error", error);
      alert(error.response?.data?.message || "something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-w-screen h-full min-h-screen">
      <div className="w-full max-w-72 md:max-w-md rounded-xl border border-border bg-card text-card-foreground shadow-lg p-8">
        <div className="space-y-2 text-center">
          <h1 className=" text-xl md:text-3xl font-bold text-foreground">
            Create Account
          </h1>

          <p className="text-xs md:text-sm text-muted-foreground">
            Join Cake & Baked and start ordering delicious treats.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}
          className="mt-4 md:mt-8 space-y-4 md:space-y-5">
          {/* Full Name */}
          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs md:text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>


          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs md:text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs md:text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>


          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-xs md:text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>


          <div className="flex items-start gap-1 md:gap-3">
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  checked={field.value ?? false}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
              )}
            />
            <Label
              htmlFor="terms"
              className="text-xs md:text-sm leading-normal md:leading-5 font-normal cursor-pointer whitespace-nowrap"

            >
              I agree to the
              <Link
                href="/terms"
                className="text-primary hover:underline"
              >
                Terms & Conditions
              </Link>
            </Label>
          </div>
          {errors.terms && (
            <p className="text-xs md:text-sm text-red-500">
              {errors.terms.message}
            </p>
          )}


          <Button type="submit" className="w-full text-xs md:text-sm">
            Create Account
          </Button>


          <p className="text-center text-xs md:text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
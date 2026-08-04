"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useVerifyEmailMutation } from "@/services/auth";
import { ArrowLeft, ArrowRight } from "lucide-react";

const verifyEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type VerifyEmailForm = z.infer<typeof verifyEmailSchema>;

export default function VerifyEmail() {
  const router = useRouter();
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const [verifiedEmail, setVerifiedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailForm>({
    resolver: zodResolver(verifyEmailSchema),
  });

  const onSubmit = async (data: VerifyEmailForm) => {
    try {
      const res = await verifyEmail(data).unwrap();

      alert(res.message || "Email verified successfully.");

      setVerifiedEmail(data.email);

      // Automatically continue to Reset Password
      router.push(`/reset-password?email=${data.email}`);
    } catch (error: any) {
      alert(error?.data?.message || "Email not found.");
      setVerifiedEmail("");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-md rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Verify Your Email
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Enter the email associated with your account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </Button>

          <div className="flex items-center justify-between">
            <Link
              href="/login"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </Link>

            {verifiedEmail && (
              <Link
                href={`/reset-password?email=${verifiedEmail}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                Reset Password
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useResetPasswordMutation } from "@/services/auth";
import { ArrowLeft } from "lucide-react";

const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const email = searchParams.get("email");

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordForm>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (data: ResetPasswordForm) => {
        try {
            const res = await resetPassword({
                email: email!,
                password: data.password,
            }).unwrap();

            alert(res.message || "Password reset successfully.");

            router.push("/login");
        } catch (error: any) {
            alert(error?.data?.message || "Something went wrong.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF7ED] px-4 py-8">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">
                        Reset Password
                    </h1>

                    <p className="mt-3 text-sm text-gray-500">
                        Create a new password for your account.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            New Password
                        </label>

                        <Input
                            type="password"
                            placeholder="Enter new password"
                            {...register("password")}
                        />

                        {errors.password && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Confirm Password
                        </label>

                        <Input
                            type="password"
                            placeholder="Confirm new password"
                            {...register("confirmPassword")}
                        />

                        {errors.confirmPassword && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-11"
                        disabled={isLoading}
                    >
                        {isLoading ? "Resetting..." : "Reset Password"}
                    </Button>

                    <Link
                        href="/login"
                        className="flex items-center gap-2 text-primary hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Login
                    </Link>
                </form>
            </div>
        </div>
    );
}
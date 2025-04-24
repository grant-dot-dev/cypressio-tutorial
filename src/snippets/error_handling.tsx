import { TvIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
};

export const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-black bg-opacity-75 rounded-lg">
                <div className="flex flex-row justify-center items-center gap-x-4">
                    <TvIcon className="h-12 w-12 text-red-500" />
                    <h1 className="text-7xl font-bold text-center text-white mb-4">Getflix</h1>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    Sign Up
                </h2>


                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Full Name */}
                    <div>
                        <input
                            {...register("fullName", {
                                required: "Full Name is required"
                            })}
                            aria-required
                            type="text"
                            placeholder="Full name"
                            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}

                    </div>

                    {/* Password */}
                    <div>
                        <input
                            {...register("password", {
                                required: "Please enter your password",
                            })}
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <input
                            {...register("confirmPassword", {
                                required: "Please enter your password",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    {/* Agree to Terms */}
                    <div className="flex items-center text-gray-400 text-sm">
                        <input
                            {...register("agreeToTerms", {
                                required: "You must agree to the terms and conditions"
                            })}
                            type="checkbox"
                            id="agreeToTerms"
                            className="mr-2"
                        />
                        <label className="select-none">
                            I agree to the Terms and Conditions
                        </label>

                    </div>
                    {errors.agreeToTerms && (
                        <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms.message}</p>
                    )}


                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold transition"
                    >
                        Sign Up
                    </button>

                    {/* Already have account */}
                    <p className="text-center text-gray-400 text-sm mt-4">
                        Already have an account?{" "}
                        <a href="#" className="text-red-500 hover:underline">
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </div >
    );
};

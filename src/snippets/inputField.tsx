// components/InputField.tsx

import { FieldError } from "react-hook-form";

type InputFieldProps = {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    register: any;
    error?: FieldError;
};

export const InputField = ({
    id,
    label,
    type = "text",
    placeholder,
    register,
    error,
}: InputFieldProps) => {
    const errorId = `${id}-error`;

    return (
        <div className="space-y-1">
            <label htmlFor={id} className="text-white">
                {label}
            </label>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? errorId : undefined}
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {error && (
                <p id={errorId} className="text-red-500 text-sm mt-1">
                    {error.message}
                </p>
            )}
        </div>
    );
};

// we can then use like so inside our react-hook-form:
<InputField
    id="fullName"
    label="Full Name"
    placeholder="Enter your full name"
    register={register("fullName", { required: "Full Name is required" })}
    error={errors.fullName}
/>

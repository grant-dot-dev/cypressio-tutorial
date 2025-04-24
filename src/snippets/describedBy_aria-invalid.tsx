{/* Email */ }
<div>
    <label htmlFor="email" className="text-white">Email</label>
    <input
        {...register("email", {
            required: "Email is required",
            pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
            },
        })}
        id="email"
        type="email"
        aria-invalid={errors.email ? "true" : "false"}
        aria-describedby={errors.email ? "email-error" : undefined}
        placeholder="Enter your email address"
        className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    {errors.email && (
        <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.email.message}
        </p>
    )}
</div>


// PASSWORD HINTS:


<p id="passwordHint" className="text-xs text-gray-500">
  Must be at least 8 characters and include a number.
</p>


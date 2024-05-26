"use client";
import DotBackgroundSection from "@/components/ui/DotBackgroundSection";
import AppButton from "@/components/ui/AppButton";
import { FieldValues } from "react-hook-form";
import AppForm from "@/components/form/AppForm";
import AppInput from "@/components/form/AppInput";
import Divider from "@/components/ui/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/validationSchemas/auth.validation";

const SignUpPage = () => {
  const handleRegister = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    <DotBackgroundSection>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  ">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Aceternity
        </h2>

        <AppForm
          resolver={zodResolver(registerValidationSchema)}
          defaultValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleRegister}
        >
          <div className="space-y-2 mt-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <AppInput
                name="firstName"
                type="text"
                label="First name"
                placeholder="John"
              />
              <AppInput
                name="lastName"
                type="text"
                label="Last name"
                placeholder="Doe"
              />
            </div>
            <AppInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="projectmayhem@fc.com"
            />
            <AppInput
              name="password"
              type="password"
              label="Password"
              placeholder="••••••••"
            />
            <AppInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="••••••••"
            />
            <Divider />
            <AppButton>Sign up &rarr;</AppButton>
          </div>
        </AppForm>
      </div>
    </DotBackgroundSection>
  );
};

export default SignUpPage;
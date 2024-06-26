import { FC } from "react";
import { Input } from "./Input";
import { Label } from "./Label";
import LabelInputContainer from "./LabelInputContainer";
import { Controller, useFormContext } from "react-hook-form";
import { error } from "console";
import { ClassValue } from "clsx";

type TInputProps = {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  className?: ClassValue;
  disabled?: boolean;
};

const AppInput: FC<TInputProps> = ({
  name,
  label,
  type,
  className,
  placeholder,
  disabled = false,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <LabelInputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              {...field}
              id={name}
              className={`${className} `}
              placeholder={placeholder}
              type={type}
              disabled={disabled}
              {...props}
            />
            {error && error.message && (
              <span className="text-sm text-red-400">{error.message}</span>
            )}
          </>
        )}
      />
    </LabelInputContainer>
  );
};

export default AppInput;

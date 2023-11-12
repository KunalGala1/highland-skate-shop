type FormInputProps = {
  title: string;
  name: string;
  register: any;
  errors: any;
  validation: any;
};

const FormInput = ({
  title,
  name,
  register,
  errors,
  validation,
}: FormInputProps) => {
  return (
    <div className='flex flex-col flex-1'>
      <label htmlFor={name} className='text-xs mb-1 text-slate-600'>
        {title}
      </label>
      <input
        {...register(name, { ...validation })}
        className='rounded shadow p-3 w-full'
      />
      {errors[name] && (
        <span className='text-xs text-red-500 mt-1'>
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default FormInput;

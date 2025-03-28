import { Control, Controller, FieldError } from 'react-hook-form'
import { formValues } from '../models'

interface Props {
  name: keyof formValues
  control: Control<formValues>
  label: string
  type?: string
  placeholder?: string
  error?: FieldError
}

export const CustomInput = ({ name, error, control, label, type, placeholder }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-slate-600' htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type ?? 'text'}
            placeholder={placeholder}
            {...field}
            className={`rounded-2xl p-2 border ${error && ' border-red-900 border-2'}`}
          />
        )}
      />
      {error && <p className='text-red-900'>{error?.message}</p>}
    </div>
  )
}

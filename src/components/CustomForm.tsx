import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email().min(1, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type formValues = z.infer<typeof schema>

export const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<formValues> = data => {
    console.log({ data })
  }

  return (
    <form
      className='flex flex-col justify-center items-center mt-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-2'>
        <label className='text-slate-600' htmlFor='name'>
          Name:
        </label>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <input
              id='name'
              type='text'
              placeholder='Jhon Doe'
              {...field}
              className={`rounded-2xl p-2 border ${errors.name && ' border-red-900 border-2'}`}
            />
          )}
        />
        {errors.name && <p className='text-red-900'>{errors.name.message}</p>}
      </div>

      <button
        className='mt-2 p-2 rounded-2xl cursor-pointer bg-slate-700 text-slate-200'
        type='submit'
      >
        submit
      </button>
    </form>
  )
}

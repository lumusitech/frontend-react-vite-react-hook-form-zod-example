import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { formValues, schema } from '../models'
import { CustomInput } from './CustomInput'

export const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<formValues> = data => {
    console.log({ data })
  }

  return (
    <form
      className='flex flex-col gap-3 justify-center items-center mt-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomInput
        name='name'
        type='text'
        control={control}
        label='Name'
        error={errors.name}
        placeholder='John Doe'
      />
      <CustomInput
        name='email'
        type='email'
        control={control}
        label='Email:'
        error={errors.email}
        placeholder='jdoe@mail.com'
      />
      <CustomInput
        name='password'
        type='password'
        control={control}
        label='Password:'
        error={errors.password}
        placeholder='123456'
      />
      <CustomInput
        name='confirmPassword'
        type='password'
        control={control}
        label='Confirm Password:'
        error={errors.confirmPassword}
        placeholder='123456'
      />

      <button
        className='mt-2 p-2 rounded-2xl cursor-pointer bg-slate-700 text-slate-200'
        type='submit'
      >
        submit
      </button>
    </form>
  )
}

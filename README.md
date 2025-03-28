# Project README

## Project Overview

This project showcases the implementation of a **custom form** component using React, React Hook Form, Zod, and TailwindCSS. Forms are a fundamental aspect of web development, commonly used for user authentication, data collection, and e-commerce. The ability to create highly interactive and validated forms is essential for delivering seamless user experiences and ensuring data accuracy across various industries.

---

## Industry Importance

By leveraging tools like **React Hook Form**, **Zod**, and **TailwindCSS**, developers can create scalable and maintainable forms with improved performance. Here’s why these tools are valuable:

- **React Hook Form**: Efficient form state management with minimal re-renders.
- **Zod**: Schema-based validation to enforce data integrity.
- **TailwindCSS**: Simplifies styling with utility-first classes for rapid UI development.

These tools together ensure a professional and modern approach to form creation.

---

## Installation and Setup

### Prerequisites

- Ensure you have **pnpm** installed.

### Steps

1. Create the project using Vite:

   ```bash
   pnpm create vite@latest
   ```

2. Navigate to your project folder and install dependencies:

   ```bash
   pnpm install
   ```

### TailwindCSS Setup

To incorporate TailwindCSS into the project, refer to the [official TailwindCSS installation documentation](https://tailwindcss.com/docs/installation) for detailed steps.

---

## Tools & Configuration

### Vite Configuration

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

This configuration integrates Vite with React and TailwindCSS, ensuring a seamless development experience.

---

## Code Overview

### App Component

```javascript
import { CustomForm } from './components'

export default function App() {
  return (
    <div className=''>
      <CustomForm />
    </div>
  )
}
```

- **Purpose**: The `App` component serves as the entry point for the application, rendering the `CustomForm` component.

---

### CustomForm Component

```javascript
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { formValues, schema } from '../models'
import { CustomInput } from './CustomInput'

export const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm <
  formValues >
  {
    resolver: zodResolver(schema),
    mode: 'onBlur',
  }

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
```

**Highlights**:

- `useForm`: Manages form state and validation.
- `zodResolver`: Integrates Zod for schema-based validation.
- `onSubmit`: Logs submitted form data to the console.

---

### Zod Schema & Validation

```javascript
import { z } from 'zod'

export const schema = z
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

export type formValues = z.infer<typeof schema>
```

- **Purpose**: Ensures required fields are filled and validates that passwords match.

---

### CustomInput Component

```javascript
import { Control, Controller, FieldError } from 'react-hook-form';
import { formValues } from '../models';

interface Props {
  name: keyof formValues;
  control: Control<formValues>;
  label: string;
  type?: string;
  placeholder?: string;
  error?: FieldError;
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
  );
};
```

**Functionality**:

- Renders input fields and dynamically displays error messages.

---

## Advantages

1. **Performance**:

   - React Hook Form reduces unnecessary renders, enhancing application speed.
   - Zod ensures efficient and precise validation.

2. **Ease of Use**:

   - TailwindCSS simplifies styling, allowing rapid UI development.
   - Modular components enable reusability and scalability.

3. **Reliability**:
   - Schema-based validation guarantees data accuracy.

This approach reflects industry best practices, promoting scalability and user satisfaction in form handling. Let me know if you'd like further adjustments! 🚀

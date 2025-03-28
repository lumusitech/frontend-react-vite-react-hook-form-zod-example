# Form and Validations - React - TypeScript - React Hook Form - Zod

This project demonstrates how to implement forms in React using **React Hook Form** for efficient form handling, **Zod** for data validation, and **TypeScript** for strong typing and robust development. This stack is highly sought after in the professional environment due to its ability to create scalable, maintainable, and professional-grade forms.

## Benefits of This Stack

1. **React Hook Form**: Efficiently handles forms with minimal re-renders, improving performance.
2. **Zod**: Provides a declarative and flexible validation system, seamlessly integrating with TypeScript.
3. **TypeScript**: Enhances code quality by catching errors during development and enforcing strict types.
4. **Scalability**: This stack is ideal for projects of any size, from small applications to complex enterprise systems.

## Installation

To get started, install the required dependencies:

```bash
# Install React Hook Form
pnpm i react-hook-form

# Install Zod
pnpm i zod

# Install React Hook Form resolvers
pnpm i @hookform/resolvers
```

Or

```bash
pnpm add react-hook-form zod @hookform/resolvers
```

## Example Usage

Below is an example of how to use this stack to handle a form with validations, including password confirmation:

```typescript
// filepath: /src/components/MyForm.tsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Define the validation schema with Zod
const schema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Must be a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'], // Error will be associated with confirmPassword
  })

// Automatically infer TypeScript types from the schema
type FormData = z.infer<typeof schema>

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log('Submitted data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type='password' {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type='password' {...register('confirmPassword')} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default MyForm
```

## Conclusion

Using React Hook Form, Zod, and TypeScript not only improves the developer experience but also ensures safer and more reliable forms. The addition of @hookform/resolvers allows seamless integration of Zod with React Hook Form, making validation even easier. This stack is an excellent choice for modern and professional projects.

Explore the code and start building robust forms today! ```

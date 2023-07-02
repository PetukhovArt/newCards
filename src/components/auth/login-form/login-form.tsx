import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

type FormValues = {
  login: string
  password: string
}

export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const {
    field: { value, onChange },
  } = useController({
    name: 'login',
    control,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label={'login'} value={value} onChange={onChange} />
      <TextField type={'password'} {...register('password')} label={'password'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}

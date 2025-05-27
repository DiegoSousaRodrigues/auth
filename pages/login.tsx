import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({})
  const router = useRouter()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    console.log('Form submitted:', formData)

    router.push('/home')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="email"
        type="text"
        placeholder="Enter your email"
      />
      <input
        onChange={handleChange}
        name="password"
        type="text"
        placeholder="Enter your password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

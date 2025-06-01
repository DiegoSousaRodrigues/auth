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

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    router.push('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white h-fit py-4 px-8 rounded-xl shadow-md w-[350px]"
    >
      <span className="font-bold text-xl">Crie sua conta</span>
      <label className="flex gap-1 flex-col text-sm">
        <span>Email</span>
        <input
          className="border rounded-lg px-3 py-2"
          onChange={handleChange}
          name="username"
          placeholder="Enter your email"
        />
      </label>
      <label className="flex gap-1 flex-col text-sm">
        <span>Senha</span>
        <input
          className="border rounded-lg px-3 py-2"
          onChange={handleChange}
          name="password"
          type="text"
          placeholder="Enter your password"
        />
      </label>
      <button
        className="border rounded-lg bg-blue-600 text-white py-2 cursor-pointer hover:bg-blue-700 transition-colors duration-200 mt-2"
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}

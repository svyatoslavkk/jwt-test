import { ChangeEvent, useState } from 'react';
import Checkbox from "~/components/Checkbox";
import Header from "~/components/Header";
import Input from "~/components/Input";
import { FORGOT_PASSWORD_TITLE, PASSWORD_PLACEHOLDER, SIGN_IN_TITLE, SIGN_UP_PROMPT, SIGN_UP_TITLE, USERNAME_PLACEHOLDER } from "~/constants";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { trpc } from "@trpc/server"
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter()
  const { mutate: login, isError } = trpc.auth.login.useMutation({
    onSuccess: () => {
      router.push('/main')
    }
  });

  const [form, setForm] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev => ({ ...prev, [name]: value })))
  }

  return (
    <div>
      <main className="flex flex-col items-center justify-center gap-y-16 w-full min-h-screen p-16">
        {isError && <p className="text-red-500 text-sm">Invalid login data</p>}
        <form 
        className="flex flex-col items-center gap-y-24 bg-white p-8 md:p-12 max-w-md w-full rounded-lg font-sans"
      >
        <Header />
        <div className="flex flex-col items-center gap-y-8">
          <Input
            name={"username"}
            type={"text"}
            placeholder={USERNAME_PLACEHOLDER}
            icon={<PersonIcon sx={{ color: "#999999" }} />}
            value={form.username}
            onChange={handleChange}
          />
          <Input
            name={"password"}
            type={"password"}
            placeholder={PASSWORD_PLACEHOLDER}
            icon={<LockIcon sx={{ color: "#999999" }} />}
            value={form.password}
            onChange={handleChange}
          />
          <Checkbox />
          <button 
            type="submit"
            className="bg-blueOcean hover:bg-blue-600 text-white font-medium rounded-full h-12 w-full text-lg uppercase transition duration-100 ease-in-out cursor-pointer"
            onClick={() => login(input)}
          >
            {SIGN_IN_TITLE}
          </button>
          <p className="text-center text-gray-400 text-sm">
            {FORGOT_PASSWORD_TITLE}
          </p>
        </div>
      </form>
        <p className="flex text-white text-sm font-light">
          {SIGN_UP_PROMPT}
          &nbsp;
          <span className="font-medium">{SIGN_UP_TITLE}</span>
        </p>
      </main>
    </div>
  )
}
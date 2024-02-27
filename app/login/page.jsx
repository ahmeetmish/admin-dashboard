import Input from "../components/Input";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 rounded bg-zinc-800">
        <h2 className="font-medium text-xl text-center">Dashboard Login</h2>
        <hr className="my-4 opacity-60" />
        <form className="gap-2 flex flex-col">
          <Input type='username' placeholder='Username' required />
          <Input type='password' placeholder='Password' required />
          <button className="p-3 font-medium rounded bg-zinc-700 hover:bg-violet-500 transition-all">Login</button>
        </form>
      </div>
    </div>
  )
}
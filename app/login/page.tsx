import { Button } from "../components/Button"

export default function Page() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold text-xl mb-4">Welcome</h1>
      <form className="flex flex-col w-1/3 mx-auto items-center" action="">
        <div className="mb-2 w-full">
          <input
            type="text"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="username"
          />
        </div>
        <div className="mb-6 w-full">
          <input
            type="password"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="password"
          />
        </div>
        <Button className="w-full">Login</Button>
        <Button variant="SECONDARY" className="w-full">
          Register
        </Button>
      </form>
    </div>
  )
}

export default function Page() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold mb-4 text-xl">Register</h1>
      <form className="flex flex-col w-1/3 mx-auto items-center" action="">
        <div className="flex gap-2 mb-2 w-full">
          <input
            type="text"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="First name"
          />
          <input
            type="text"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="Last name"
          />
        </div>
        <div className="mb-2 w-full">
          <input
            type="text"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="username"
          />
        </div>
        <div className="mb-2 w-full">
          <input
            type="password"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
            placeholder="password"
          />
        </div>
        <div className="mb-6 w-full">
          <input
            type="date"
            className="w-full border-2 border-slate-800 rounded-md px-4 py-2"
          />
        </div>
        <button className="w-full bg-slate-800 text-center py-2 rounded-md text-white mb-2">
          Register
        </button>
      </form>
    </div>
  )
}

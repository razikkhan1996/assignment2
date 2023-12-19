
const Button = ({ onClick, children }) => {
  return (
    <button className="bg-zinc-950 text-white py-2 px-6 my-10 rounded hover:bg-slate-900"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
export default function Input({ onChange, name, defaultValue, type, placeholder, required }) {
  return (
    <div className="gap-2 flex items-center p-3 text-sm rounded bg-zinc-700">
      <input onChange={onChange} name={name} defaultValue={defaultValue} type={type} placeholder={placeholder} required={required} className="bg-transparent border-none outline-none w-full" />
    </div>
  )
}
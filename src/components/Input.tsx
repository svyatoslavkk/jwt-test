import { IInput } from "~/types";

export default function Input({ name, type, value, onChange, placeholder, icon }: IInput) {
  return (
    <div className="relative w-full">
      <span className="absolute bottom-1 left-0">{icon}</span>
      <input
        name={name}
        type={type}
        className="w-full text-lg border-b-2 px-8 border-gray-300 bg-transparent outline-none focus:border-black placeholder-gray-500"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700 transform scale-x-0 transition-all duration-300 ease-in-out"></div>
    </div>
  );
}
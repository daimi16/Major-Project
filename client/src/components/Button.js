export default function Button({
  children,
  onclickcallback,
  customstyle,
  disabled,
}) {
  return (
    <button
      className={`bg-blue-900 hover:bg-blue-600 text-white rounded p-4 ${customstyle} ${
        disabled ? "bg-gray-500 hover:bg-gray-500 hover:cursor-default" : ""
      }`}
      onClick={() => (!disabled ? onclickcallback() : true)}
    >
      {children}
    </button>
  );
}

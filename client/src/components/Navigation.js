import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="p-6 text-xl text-white font-bold tracking-widest">
      <div>
        <h1
          className="text-2xl hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Bird Species Identifier
        </h1>
      </div>
    </nav>
  );
}

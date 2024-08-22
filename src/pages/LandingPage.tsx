import { useNavigate } from "react-router-dom";

function LandingPage() {
  const route = [
    { id: 1, name: "logicaltest" },
    { id: 2, name: "pokemontest" },
    { id: 3, name: "learning-redux" },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="p-6 bg-white rounded-2xl flex justify-center items-center">
        <ul>
          {route.map((item, index) => (
            <li onClick={() => navigate(`/${item.name}`)} key={index} className="cursor-pointer hover:text-green-500">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;

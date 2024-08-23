import { useNavigate } from "react-router-dom";

function LandingPage() {
  const route = [
    { id: 1, link: "logicaltest" , name: "logical test"},
    { id: 2, link: "pokemontest" , name: "pokemont test"},
    { id: 3, link: "learning-redux", name: "leaning redux"},
    { id: 4, link: "product/get-product", name: "get product"},
  ];

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="p-6 bg-white rounded-2xl flex justify-center items-center">
        <ul>
          {route.map((item, index) => (
            <li onClick={() => navigate(`/${item.link}`)} key={index} className="cursor-pointer hover:text-green-500">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;

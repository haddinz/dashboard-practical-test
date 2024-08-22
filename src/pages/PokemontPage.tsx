import { useEffect, useState } from "react";
import Select from "react-select";

function PokemonPage() {
  interface OptionType {
    value: string;
    label: string;
  }

  const [data, setData] = useState([]);
  const [valueSelect, setValueSelect] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);

  const getPokemonBarries = async () => {
    const getData = await fetch("https://pokeapi.co/api/v2/berry");
    const data = await getData.json();
    const result = data.results.map((item: { name: string }) => {
      return {
        label: item.name,
        value: item.name,
      };
    });

    setData(
      result.sort((a: { label: string }, b: { label: string }) =>
        a.label.localeCompare(b.label)
      )
    );
  };

  useEffect(() => {
    getPokemonBarries();
  }, []);

  const clickHandler = () => {
    setIsShow(!isShow);
  };

  const changeHandler = (value: string) => {
    setValueSelect(value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="w-80">
        <Select
          options={data}
          onChange={(e: OptionType | null) => {
            e && changeHandler(e.value);
          }}
        />
        <button
          type="button"
          className="w-full p-2 bg-cyan-300 mt-2 rounded hover:scale-105"
          onClick={clickHandler}
          disabled={!valueSelect}
        >
          {isShow ? "delete submit" : "submit"}
        </button>

        {isShow && (
          <div className="w-full p-2 bg-blue-300 mt-2 rounded text-center">
            <h1>{valueSelect}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonPage;

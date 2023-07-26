import { ChangeEvent, useState } from "react";
import { allMenu } from "../data/menu";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMenu(e.target.value);
  };
  const handleSubmit = () => {
    navigate(`/${menu}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="recipe" onChange={handleChange} value={menu} />
        <button type="submit">검색</button>
      </form>
      {Object.keys(allMenu).map((key) => (
        <div key={key}>
          <h2>{key}</h2>
          <ul>
            {allMenu[key].map((i) => (
              <li>
                <a href={`/${i}`}>{i}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Main;

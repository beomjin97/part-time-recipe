import { ChangeEvent, useState } from "react";
import { allMenu } from "../data/menu";
import { useNavigate } from "react-router-dom";
import List from "./List";
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
    <div
      style={{
        margin: "8px",
      }}
    >
      <div style={{ width: "300px", marginRight: "auto", marginLeft: "auto" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="recipe"
            onChange={handleChange}
            value={menu}
          />
          <button type="submit">검색</button>
        </form>
        {Object.keys(allMenu).map((key) => (
          <List varient={key} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Main;

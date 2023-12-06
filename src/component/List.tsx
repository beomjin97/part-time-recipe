import { useState } from "react";
import { allMenu } from "../data/menu";

interface Props {
  varient: string;
}

const List = ({ varient }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div style={{ margin: "2px", textAlign: "center" }}>
      <h2
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
        style={{
          cursor: "pointer",
        }}
      >
        {varient}
      </h2>
      <ul>
        {allMenu[varient].map((i) => (
          <li
            style={{
              display: isVisible ? "block" : "none",
            }}
          >
            <a href={`/${i}`}>{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

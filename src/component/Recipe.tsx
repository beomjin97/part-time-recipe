import { useParams } from "react-router-dom";
import { recipe } from "../data/recipe";
const Recipe = () => {
  const { menu } = useParams();
  if (!menu) {
    return <div>없는 메뉴입니다.</div>;
  }
  return (
    <ol>
      {recipe[menu].map((i, idx) => (
        <li key={idx}>{i}</li>
      ))}
    </ol>
  );
};

export default Recipe;

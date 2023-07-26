import { useParams } from "react-router-dom";
import { recipe } from "../data/recipe";
const Recipe = () => {
  const { menu } = useParams();
  if (!menu) {
    return <div>등록되지 않은 메뉴입니다. 관리자에게 문의하세요</div>;
  }
  return (
    <>
      <h1>{menu}</h1>
      <ol>
        {recipe[menu].map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ol>
    </>
  );
};

export default Recipe;

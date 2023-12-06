import { useParams } from "react-router-dom";
import { recipes } from "../data/recipe";
import { Cup, Plate, Straw } from "../data/type";
const Recipe = () => {
  const { menu } = useParams();

  if (!menu) {
    return <h1>잘못된 접근입니다.</h1>;
  }

  if (!recipes[menu]) {
    return <div>등록되지 않은 메뉴입니다. 관리자에게 문의하세요</div>;
  }

  const { ingredients, order, plate, cup, straw, decoration } = recipes[menu];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>{menu}</h1>
        {ingredients && (
          <div>
            <span style={{ fontWeight: 700 }}>재료 :</span>
            {ingredients.map((ingredient, idx) => {
              if (ingredients.length === idx + 1) {
                return <span key={idx}> {ingredient}</span>;
              }
              return <span key={idx}> {ingredient},</span>;
            })}
          </div>
        )}
        {decoration && (
          <div>
            <span style={{ fontWeight: 700 }}>데코 또는 소스 :</span>
            {decoration.map((deco, idx) => {
              if (ingredients.length === idx + 1) {
                return <span key={idx}> {deco}</span>;
              }
              return <span key={idx}> {deco},</span>;
            })}
          </div>
        )}
        {plate && (
          <div>
            <span style={{ fontWeight: 700 }}>트레이 : </span>
            {Plate[plate]}
          </div>
        )}
        {cup && (
          <div>
            <span style={{ fontWeight: 700 }}>컵 : </span>
            {Cup[cup]}
          </div>
        )}
        {straw && (
          <div>
            <span style={{ fontWeight: 700 }}>빨대 : </span>
            {Straw[straw]}
          </div>
        )}
        <span style={{ fontWeight: 700 }}>순서 : </span>
        <div style={{ paddingLeft: 0 }}>
          {order.map((i, idx) => (
            <div key={idx} style={{ color: "skyblue" }}>
              {idx + 1}. {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;

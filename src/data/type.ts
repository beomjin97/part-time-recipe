export enum Menu {
  우동 = 1,
  라면,
  떡볶이,
  만둣국,
  국밥,
  덮밥,
  볶음밥,
  주먹밥,
  떡꼬치,
  와플,
  야끼,
  만두강정,
  치킨너겟,
  치즈스틱,
  탕수육,
  만두,
  핫도그,
  라떼,
  초코,
  차,
  포션,
  커피,
  버블티,
  미숫가루,
  스무디,
  에이드,
}

export interface Recipe {
  ingredients: string[];
  order: string[];
  plate?: Plate;
  cup?: Cup;
  straw?: Straw;
  decoration?: string[];
}

export enum Plate {
  넓은그릇 = 1,
  라면그릇,
  호떡용지,
  종이트레이,
  핫도그트레이,
  긴핫도그트레이,
}

export enum Cup {
  XL컵,
  L컵,
  종이컵,
}

export enum Straw {
  굵은빨대,
  얇은빨대,
  유색빨대,
  검은색빨대,
}

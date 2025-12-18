const obj = { fullname: "철수" };

// 새 키를 만들고 기존 키 삭제
// const newObj = {
//   ...obj,            // 기존 키 복사
//   nickname: obj.fullname // 새 키에 값 할당
// };
// delete newObj.fullname;   // 기존 키 삭제

// console.log(newObj);  // { nickname: "철수" }

//---
//키를 변수로 만들어서 객체 변경하는 예제
const keyToChange = "fullname_female";
const updatedObj = {
  ...obj,
  [keyToChange]: "영희" // 변수로 키 지정
};


console.log(updatedObj); // { fullname: "영희" }


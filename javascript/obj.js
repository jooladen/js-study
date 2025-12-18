const obj = { name: "철수" };

// 새 키를 만들고 기존 키 삭제
const newObj = {
  ...obj,            // 기존 키 복사
  nickname: obj.name // 새 키에 값 할당
};
delete newObj.name;   // 기존 키 삭제

console.log(newObj);  // { nickname: "철수" }
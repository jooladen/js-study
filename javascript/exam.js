//중괄호 리턴 연습
// 🔹 초급 문제 세트
// 1. forEach
const arr = ["a", "b", "c"];
arr.forEach((ch, idx) => {
  console.log(idx + "번째: " + ch); 
});

const charData = ["a", "b", "c"];
charData.forEach((charData, idx) => {
  console.log(idx + "번째: " + charData);
});

// 👉 무엇이 출력될까요?

// 2. map
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);

console.log(doubled);


// 👉 결과는?

// 3. filter
const scores = [45, 82, 67, 90];
const pass = scores.filter(score => score >= 70);

console.log(pass);


// 👉 어떤 배열이 나올까요?

// 4. reduce
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, cur) => acc + cur, 0);

console.log(sum);


// 👉 결과는 몇일까요?

// 5. 종합 문제
const data = [5, 10, 15, 20];

// 1) 10 이상인 값만 뽑고
// 2) 각각 2배로 바꾸고
// 3) 모두 더하기


// 👉 어떤 코드로 작성할 수 있을까요?
// 👉 최종 결과는 몇일까요?
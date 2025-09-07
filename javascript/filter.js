const emp = [
  { name: '김기술', salary: 3000 },
  { name: '이설계', salary: 4000 },
  { name: '박생산', salary: 3500 }
];

const raised = emp.map(e => ({
  ...e,
  salary: e.salary * 1.1
}));

const filtered = emp.filter(e => e.salary >= 3500);


console.log("filtered >>> ", filtered);


const total = emp.reduce((acc, e) => acc + e.salary, 0);

console.log("total >>> ", total);


const total2 = emp.reduce((acc, e, idx) => {
  console.log(
    `[${idx + 1}회차] 지금까지 총합: ${acc}, 이번 사원: ${e.name}, 연봉: ${e.salary}, 누적 결과: ${acc + e.salary}`
  );
  return acc + e.salary;
}, 0);

console.log(`🔥 총 연봉 합계: ${total2}`);
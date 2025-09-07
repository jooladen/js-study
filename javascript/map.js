const emp = [
  { name: '김기술', salary: 3000 },
  { name: '이설계', salary: 4000 },
  { name: '박생산', salary: 3500 }
];

const raised = emp.map(e => ({
  ...e,
  salary: e.salary * 1.1
}));

const raised2 = emp.map(e => ({
  salary: e.salary * 1.1
}));


console.log("raised >>> ", raised);

console.log("raised2 >>> ", raised2);


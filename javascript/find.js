const emp = [
  { name: '김기술', salary: 3000 },
  { name: '이설계', salary: 4000 },
  { name: '박생산', salary: 3500 }
];

const salary = emp.find(e => e.name === '박생산');
console.log(salary); // 9999

const salary2 = emp.find(e => e.name === '박생산')?.salary;
//아주중요....없는거 찾았을떄...반드기 ?로 막야야 함
//const salary2 = emp.find(e => e.name === '이성계').salary;   
console.log(salary2); // 9999
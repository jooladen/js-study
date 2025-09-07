emp = [
    {'name': '김기술', 'salary': 3000},
    {'name': '이설계', 'salary': 4000},
    {'name': '박생산', 'salary': 3500}
]

total = 0
for i, e in enumerate(emp):
    print(f"[{i+1}회차] 지금까지 총합: {total}, 이번 사원: {e['name']}, 연봉: {e['salary']}, 누적 결과: {total + e['salary']}")
    total += e['salary']

print(f"🔥 총 연봉 합계: {total}")
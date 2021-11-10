
//2020년도 분기별 매출
const arr = [
    [90, 87, 140,],
    [120, 130, 150],
    [180, 240, 200],
    [180, 140, 190]
]

//분기별 매출 총합

let sum = 0

for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]
    sum += tempArr[i]
    console.log(sum)
}


//총합의 평균


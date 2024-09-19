export function validNumbers(arr, length) {
  if (arr.length !== length) throw new Error(`[ERROR] 입력한 값은 ${length}자리가 아닙니다.`);
  for (const value of arr) {
    if (Number.isNaN(value)) throw new Error(`[ERROR] 입력한 값에 숫자가 아닌 값이 있습니다.`);
  }
  if (new Set(arr).size !== length) throw new Error("[ERROR] 입력한 값에 중복이 있습니다.");
}

export function validGameEndInput(input) {
  if (input !== "1" && input !== "2") throw new Error("[ERROR] 잘못 입력 하셨습니다.");
}

const date = new Date("2024-12-29");
const month = date.getMonth() + 1; // 月は0から始まるため、+1します
const day = date.getDate();
const year = date.getFullYear();

console.log(`${year}年${month}月${day}日`);
const array = [1, 2, 3, 5];

const dataSend = array.filter((n) => n > 2);
console.log(dataSend);

const res = dataSend.includes(8) ? "Y" : "N";

console.log(res);

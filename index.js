let a;
let b;
let c;
let d;
let e;
let f;
let M;

a = Number(prompt("enter la note a"));
console.log(a);
b = Number(prompt("enter la note b"));
console.log(b);
c = Number(prompt("enter la note c"));
console.log(c);
d = Number(prompt("enter la note d"));
console.log(d);
e = Number(prompt("enter la note e"));
console.log(e);
f = Number(prompt("enter la note f"));
console.log(f);

M = (a + b + c + d + e + f) / 5;
console.log("La moyenne est", M);

if (M >= 10) {
  console.log("ناجح");
} else {
  console.log("راسب");
}

switch (true) {
  case M < 10:
    console.log("لاشيئ");
    break;
    
  case M <= 12:
    console.log("متوسط");
    break;

  case M <= 14:
    console.log("فوق المتوسط");
    break;

  case M <= 16:
    console.log("جيد");
    break;

  case M > 16:
    console.log("ممتاز");
    break;
}

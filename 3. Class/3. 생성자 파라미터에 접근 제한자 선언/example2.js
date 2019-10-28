class Foo {
    // x는 생성자 내부에서만 유효한 지역 변수이다.
    constructor(x) {
        console.log(x);
    }
}
const foo = new Foo('Hello');
console.log(foo); // Foo {}

var Foo = /** @class */ (function () {
    // x는 생성자 내부에서만 유효한 지역 변수이다.
    function Foo(x) {
        console.log(x);
    }
    return Foo;
}());
var foo = new Foo('Hello');
console.log(foo); // Foo {}
class Foo {
    // x는 생성자 내부에서만 유효한 지역 변수이다.
    constructor(x) {
        console.log(x);
    }
}
const foo = new Foo('Hello');
console.log(foo); // Foo {}

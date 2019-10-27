class Foo {
    // 생성된 인스턴스의 갯수
    static instanceCounter = 0;
    constructor() {
        // 생성자가 호출될 때마다 카운터를 1씩 증가시킨다.
        Foo.instanceCounter++;
    }
}

var foo1 = new Foo();
var foo2 = new Foo();

console.log(Foo.instanceCounter);  // 2
console.log(foo2.instanceCounter); // error TS2339: Property 'instanceCounter' does not exist on type 'Foo'.
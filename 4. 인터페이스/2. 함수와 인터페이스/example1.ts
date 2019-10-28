// 함수 인터페이스의 정의
interface SquareFunc {
    (num: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const squareFunc: SquareFunc = function (num: number) {
    return num * num;
}

console.log(squareFunc(10)); // 100
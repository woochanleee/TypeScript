var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log('Quack!');
    };
    return MallardDuck;
}());
var RedheadDuck = /** @class */ (function () {
    function RedheadDuck() {
    }
    RedheadDuck.prototype.quack = function () {
        console.log('q~uack!');
    };
    return RedheadDuck;
}());
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
// TypeScript는 해당 인터페이스에서 정의한 프로퍼티나 메소드를 가지고 있다면 그 인터페이스를 구현한 것으로 인정한다.이것을 덕 타이핑(duck typing)

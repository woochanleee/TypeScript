interface IDuck { // 1
    quack(): void;
}

class MallardDuck implements IDuck { // 3
    quack() {
        console.log('Quack!');
    }
}

class RedheadDuck { // 4
    quack() {
        console.log('q~uack!');
    }
}

function makeNoise(duck: IDuck): void { // 2
    duck.quack();
}

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5

// TypeScript는 해당 인터페이스에서 정의한 프로퍼티나 메소드를 가지고 있다면 그 인터페이스를 구현한 것으로 인정한다.이것을 덕 타이핑(duck typing)
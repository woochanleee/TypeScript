// ES6 클래스는 클래스 몸체에 메소드만을 포함할 수 있다.클래스 몸체에 클래스 프로퍼티를 선언할 수 없고 반드시 생성자 내부에서 클래스 프로퍼티를 선언하고 초기화한다.
class Person {
    constructor(name) {
        // 클래스 프로퍼티의 선언과 초기화
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

/*
    위 예제는 ES6에서 문제없이 실행되는 코드이지만 위 파일의 확장자를 ts로 바꾸어 Typescript 파일로 변경한 후, 컴파일하면 아래와 같이 컴파일 에러가 발생한다.

    person.ts(4, 10): error TS2339: Property 'name' does not exist on type 'Person'.
    person.ts(8, 25): error TS2339: Property 'name' does not exist on type 'Person'.
    Typescript 클래스는 클래스 몸체에 클래스 프로퍼티를 사전 선언하여야 한다.
*/
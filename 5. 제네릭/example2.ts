class Queue<T> {
    protected data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T {
        return this.data.shift();
    }
}

// number 전용 Queue
const numberQueue = new Queue<number>();

numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+'1');   // 실수를 사전 인지하고 수정할 수 있다

console.log(numberQueue.pop().toFixed()); // 0
console.log(numberQueue.pop().toFixed()); // 1

// string 전용 Queue
const stringQueue = new Queue<string>();

stringQueue.push('Hello');
stringQueue.push('World');

console.log(stringQueue.pop().toUpperCase()); // HELLO
console.log(stringQueue.pop().toUpperCase()); // WORLD

// 커스텀 객체 전용 Queue
const myQueue = new Queue<{ name: string, age: number }>();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'Kim', age: 20 });

console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // { name: 'Kim', age: 20 }
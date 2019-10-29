class Queue {
    protected data = []; // data: any[]

    push(item) {
        this.data.push(item);
    }

    pop() {
        return this.data.shift();
    }
}

// Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스를 정의
class NumberQueue extends Queue {
    // number 타입의 요소만을 push한다.
    push(item: number) {
        super.push(item);
    }

    pop(): number {
        return super.pop();
    }
}

const queue = new NumberQueue();

queue.push(0);
// 의도하지 않은 실수를 사전 검출 가능
// [ts] Argument of type '"1"' is not assignable to parameter of type 'number'.
// queue.push('1');
queue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // 1
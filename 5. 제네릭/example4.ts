function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const arg = [{ name: 'Lee' }, { name: 'Kim' }];
// 인수에 의해 타입 매개변수가 결정된다.
const reversed = reverse(arg);
console.log(reversed); // [ { name: 'Kim' }, { name: 'Lee' } ]
const solution = require('./shapeArea.js');

test('test 1', () => {
    expect(solution(2)).toBe(5);
});

test('test 2', () => {
    expect(solution(3)).toBe(13);
});

test('test 3', () => {
    expect(solution(1)).toBe(1);
});

test('test 4', () => {
    expect(solution(5)).toBe(41);
});

test('test 5', () => {
    expect(solution(7000)).toBe(97986001);
});

test('test 6', () => {
    expect(solution(8000)).toBe(127984001);
});

test('test 7', () => {
    expect(solution(9999)).toBe(199940005);
});

test('test 8', () => {
    expect(solution(9998)).toBe(199900013);
});

test('test 9', () => {
    expect(solution(8999)).toBe(161946005);
});

test('test 10', () => {
    expect(solution(100)).toBe(19801);
});

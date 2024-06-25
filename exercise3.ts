function sum(a: number, b: number): number {
    return a + b;
}
function getFixedNumber(): number {
    return 42;
}
function processString(input: string, toUpper?: boolean): string {
    if (toUpper) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}

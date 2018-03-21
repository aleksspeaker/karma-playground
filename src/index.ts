function foo(n: number) {
    if(typeof n === 'number') {
        return n * n;
    } else {
        return 'Please provide valid number'
    }
}

export default foo;
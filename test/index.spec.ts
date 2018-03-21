import foo from '../src/index'

describe('foo', function() {

    it('should be defined', function() {
        expect(foo).toBeDefined();
    });

    it('should be a function', function() {
        expect(typeof foo).toBe('function')
    });

    it('should return 1', function() {
        expect(foo(1)).toEqual(1);
    });

    it('should return 4', function() {
        expect(foo(2)).toEqual(4);
    });

    it('should return "Please provide valid number"', function() {
        expect(foo('s' as any)).toEqual('Please provide valid number');
    });

});
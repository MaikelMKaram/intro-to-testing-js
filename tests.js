// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Exercise 1
describe('sayHello',function() {
    it("Should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
//Exercise 2
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
//Exercise 3
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
//Exercise 4
    it('should should "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
//Exercise 5
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
//Exercise 8
    it('should return "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should should return "Hello, World!', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

//Exercise 10
describe("isFive",function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function")
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive).toBe("boolean");
    });

})

//Exercise 11
describe("isEven",function (){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function")
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven).toBe("boolean")
    });

})

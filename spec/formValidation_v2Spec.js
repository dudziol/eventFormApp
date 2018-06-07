let fieldCase1 = new Field("name", "Kamil", "[A-Za-z]+");
	fieldCase2 = new Field("lastName", "", "[A-Za-z]+");
    fieldCase3 = new Field("email", "hello@", "[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,4}$");

// EVERY CASE
describe("Field Class - every case - before validation", function(){
	it("should has isFieldValid property equal to false (case1)", function(){
		expect(fieldCase1.isFieldValid).toBe(false);
	});
	it("should has isFieldValid property equal to false (case2)", function(){
		expect(fieldCase2.isFieldValid).toBe(false);
	});
	it("should has isFieldValid property equal to false (case3)", function(){
		expect(fieldCase3.isFieldValid).toBe(false);
	});
	it("should has isEmpty property equal to true (case1)", function(){
		expect(fieldCase1.isEmpty).toBe(true);
	});
	it("should has isEmpty property equal to true (case2)", function(){
		expect(fieldCase2.isEmpty).toBe(true);
	});
	it("should has isEmpty property equal to true (case3)", function(){
		expect(fieldCase3.isEmpty).toBe(true);
	});
	it("should has isPatternValid property equal to false (case1)", function(){
		expect(fieldCase1.isPatternValid).toBe(false);
	});
	it("should has isPatternValid property equal to false (case2)", function(){
		expect(fieldCase2.isPatternValid).toBe(false);
	});
	it("should has isPatternValid property equal to false (case3)", function(){
		expect(fieldCase3.isPatternValid).toBe(false);
	});
});

// VALID CASE
let fieldCase1Validated = new Field("name", "Kamil", "[A-Za-z]+");
	fieldCase1Validated.validateField();

describe("Field Class - Valid case - after validation", function(){
	it("should has isFieldValid property equal to true", function(){
		expect(fieldCase1Validated.isFieldValid).toBe(true);
	});
	it("should has isEmpty property equal to false", function(){
		expect(fieldCase1Validated.isEmpty).toBe(false);
	});
	it("should has isPatternValid property equal to true", function(){
		expect(fieldCase1Validated.isPatternValid).toBe(true);
	});
});

// EMPTY CASE
let fieldCase2Validated = new Field("lastName", "", "[A-Za-z]+");
	fieldCase2Validated.validateField();

describe("Field Class - Empty case - after validation", function(){
	it("should has isFieldValid property equal to false", function(){
		expect(fieldCase2Validated.isFieldValid).toBe(false);
	});
	it("should has isEmpty property equal to true", function(){
		expect(fieldCase2Validated.isEmpty).toBe(true);
	});
	it("should has isPatternValid property equal to false", function(){
		expect(fieldCase2Validated.isPatternValid).toBe(false);
	});
});

// INVALID PATTERN CASE
let fieldCase3Validated = new Field("email", "hello@", "[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,4}$");
	fieldCase3Validated.validateField();

describe("Field Class - Invalid Pattern case - after validation", function(){
	it("should has isFieldValid property equal to false", function(){
		expect(fieldCase3Validated.isFieldValid).toBe(false);
	});
	it("should has isEmpty property equal to false", function(){
		expect(fieldCase3Validated.isEmpty).toBe(false);
	});
	it("should has isPatternValid property equal to false", function(){
		expect(fieldCase3Validated.isPatternValid).toBe(false);
	});
});
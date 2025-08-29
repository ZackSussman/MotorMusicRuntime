import { Type } from '../../src/typescript/ParserListeners/Statics';

// Test suite for the Type class
export const typeTests = {
    'Primitive Types': {
        'should create number type': () => {
            const numberType = Type.number();
            if (numberType.format() !== 'number') {
                throw new Error(`Expected 'number', got '${numberType.format()}'`);
            }
        },

        'should create syllable type': () => {
            const syllableType = Type.syllable();
            if (syllableType.format() !== 'syllable') {
                throw new Error(`Expected 'syllable', got '${syllableType.format()}'`);
            }
        },

        'should create syllables type': () => {
            const syllablesType = Type.syllables();
            if (syllablesType.format() !== 'syllables') {
                throw new Error(`Expected 'syllables', got '${syllablesType.format()}'`);
            }
        },

        'should create raisedGesture type': () => {
            const gestureType = Type.raisedGesture();
            if (gestureType.format() !== 'raisedGesture') {
                throw new Error(`Expected 'raisedGesture', got '${gestureType.format()}'`);
            }
        },

        'should correctly identify gesture types': () => {
            const syllableType = Type.syllable();
            const syllablesType = Type.syllables();
            const gestureType = Type.raisedGesture();
            const numberType = Type.number();
            
            if (!syllableType.isGesture()) {
                throw new Error('syllable should be a gesture type');
            }
            if (!syllablesType.isGesture()) {
                throw new Error('syllables should be a gesture type');
            }
            if (!gestureType.isGesture()) {
                throw new Error('raisedGesture should be a gesture type');
            }
            if (numberType.isGesture()) {
                throw new Error('number should not be a gesture type');
            }
        },
    },

    'Type Classification': {
        'should correctly identify primitive types': () => {
            const numberType = Type.number();
            const syllableType = Type.syllable();
            const syllablesType = Type.syllables();
            const gestureType = Type.raisedGesture();
            
            // Test specific type methods
            if (!numberType.isNumber()) {
                throw new Error('number type should return true for isNumber()');
            }
            if (!syllableType.isSyllable()) {
                throw new Error('syllable type should return true for isSyllable()');
            }
            if (!syllablesType.isSyllables()) {
                throw new Error('syllables type should return true for isSyllables()');
            }
            if (!gestureType.isRaisedGesture()) {
                throw new Error('raisedGesture type should return true for isRaisedGesture()');
            }
            
            // Test cross-type checks (should be false)
            if (numberType.isSyllable() || numberType.isSyllables() || numberType.isRaisedGesture()) {
                throw new Error('number type should not match other primitive types');
            }
            if (syllableType.isNumber() || syllableType.isSyllables() || syllableType.isRaisedGesture()) {
                throw new Error('syllable type should not match other primitive types');
            }
        },

        'should correctly identify syllabic types': () => {
            const numberType = Type.number();
            const syllableType = Type.syllable();
            const syllablesType = Type.syllables();
            const gestureType = Type.raisedGesture();
            const functionType = Type.function(Type.number(), Type.syllable());
            
            // syllable and syllables should be syllabic
            if (!syllableType.isSyllabic()) {
                throw new Error('syllable should be syllabic');
            }
            if (!syllablesType.isSyllabic()) {
                throw new Error('syllables should be syllabic');
            }
            
            // number, raisedGesture, and functions should not be syllabic
            if (numberType.isSyllabic()) {
                throw new Error('number should not be syllabic');
            }
            if (gestureType.isSyllabic()) {
                throw new Error('raisedGesture should not be syllabic');
            }
            if (functionType.isSyllabic()) {
                throw new Error('function should not be syllabic');
            }
        },

        'should correctly identify gesture types': () => {
            const numberType = Type.number();
            const syllableType = Type.syllable();
            const syllablesType = Type.syllables();
            const gestureType = Type.raisedGesture();
            const functionType = Type.function(Type.number(), Type.syllable());
            
            // syllable, syllables, and raisedGesture should be gestures
            if (!syllableType.isGesture()) {
                throw new Error('syllable should be a gesture');
            }
            if (!syllablesType.isGesture()) {
                throw new Error('syllables should be a gesture');
            }
            if (!gestureType.isGesture()) {
                throw new Error('raisedGesture should be a gesture');
            }
            
            // number and functions should not be gestures
            if (numberType.isGesture()) {
                throw new Error('number should not be a gesture');
            }
            if (functionType.isGesture()) {
                throw new Error('function should not be a gesture');
            }
        },

        'should handle function type classification': () => {
            const simpleFunction = Type.function(Type.number(), Type.syllable());
            const nestedFunction = Type.function(
                Type.function(Type.number(), Type.syllable()),
                Type.raisedGesture()
            );
            
            // Function types should not be primitive types
            if (simpleFunction.isNumber() || simpleFunction.isSyllable() || 
                simpleFunction.isSyllables() || simpleFunction.isRaisedGesture()) {
                throw new Error('function type should not match primitive types');
            }
            
            if (nestedFunction.isNumber() || nestedFunction.isSyllable() || 
                nestedFunction.isSyllables() || nestedFunction.isRaisedGesture()) {
                throw new Error('nested function type should not match primitive types');
            }
            
            // Function types should not be syllabic or gestures
            if (simpleFunction.isSyllabic() || simpleFunction.isGesture()) {
                throw new Error('function type should not be syllabic or gesture');
            }
            if (nestedFunction.isSyllabic() || nestedFunction.isGesture()) {
                throw new Error('nested function type should not be syllabic or gesture');
            }
        },
    },

    'Function Types': {
        'should create simple function type': () => {
            const fromType = Type.number();
            const toType = Type.syllable();
            const functionType = Type.function(fromType, toType);
            const expected = 'number -> syllable';
            if (functionType.format() !== expected) {
                throw new Error(`Expected '${expected}', got '${functionType.format()}'`);
            }
        },

        'should create nested function type': () => {
            const numberType = Type.number();
            const syllableType = Type.syllable();
            const gestureType = Type.raisedGesture();
            
            // number -> syllable -> raisedGesture
            const innerFunction = Type.function(syllableType, gestureType);
            const outerFunction = Type.function(numberType, innerFunction);
            
            const expected = 'number -> syllable -> raisedGesture';
            if (outerFunction.format() !== expected) {
                throw new Error(`Expected '${expected}', got '${outerFunction.format()}'`);
            }
        },

        'should create function returning function': () => {
            const numberType = Type.number();
            // (number -> number) -> number
            const innerFunction = Type.function(numberType, numberType);
            const outerFunction = Type.function(innerFunction, numberType);
            
            const expected = '(number -> number) -> number';
            if (outerFunction.format() !== expected) {
                throw new Error(`Expected '${expected}', got '${outerFunction.format()}'`);
            }
        },

        'should handle deeply nested function types': () => {
            const numberType = Type.number();
            const syllableType = Type.syllable();
            
            // number -> number -> number -> syllable
            const step1 = Type.function(numberType, syllableType);
            const step2 = Type.function(numberType, step1);
            const step3 = Type.function(numberType, step2);
            
            const expected = 'number -> number -> number -> syllable';
            if (step3.format() !== expected) {
                throw new Error(`Expected '${expected}', got '${step3.format()}'`);
            }
        },
    },

    'Type Equality': {
        'should handle primitive type equality': () => {
            const num1 = Type.number();
            const num2 = Type.number();
            const syllable1 = Type.syllable();
            
            if (!num1.equals(num2)) {
                throw new Error('Same primitive types should be equal');
            }
            
            if (num1.equals(syllable1)) {
                throw new Error('Different primitive types should not be equal');
            }
        },

        'should handle function type equality': () => {
            const numberType = Type.number();
            const syllableType = Type.syllable();
            
            const func1 = Type.function(numberType, syllableType);
            const func2 = Type.function(Type.number(), Type.syllable());
            const func3 = Type.function(syllableType, numberType);
            
            if (!func1.equals(func2)) {
                throw new Error('Equivalent function types should be equal');
            }
            
            if (func1.equals(func3)) {
                throw new Error('Different function types should not be equal');
            }
        },

        'should distinguish left vs right associative function types': () => {
            // left: (number -> number) -> number
            const left = Type.function(
                Type.function(Type.number(), Type.number()),
                Type.number()
            );
            // right: number -> (number -> number)
            const right = Type.function(
                Type.number(),
                Type.function(Type.number(), Type.number())
            );
            if (left.equals(right)) {
                throw new Error('Left and right associative function types should not be equal');
            }
            if (left.format() !== '(number -> number) -> number') {
                throw new Error(`Expected left format '(number -> number) -> number', got '${left.format()}'`);
            }
            if (right.format() !== 'number -> number -> number') {
                throw new Error(`Expected right format 'number -> number -> number', got '${right.format()}'`);
            }
        },

        'should handle complex function type equality': () => {
            // number -> syllable -> raisedGesture
            const complex1 = Type.function(
                Type.number(),
                Type.function(Type.syllable(), Type.raisedGesture())
            );
            
            const complex2 = Type.function(
                Type.number(),
                Type.function(Type.syllable(), Type.raisedGesture())
            );
            
            const complex3 = Type.function(
                Type.syllable(),
                Type.function(Type.number(), Type.raisedGesture())
            );
            
            if (!complex1.equals(complex2)) {
                throw new Error('Equivalent complex function types should be equal');
            }
            
            if (complex1.equals(complex3)) {
                throw new Error('Different complex function types should not be equal');
            }
        },

        'should handle mixed primitive and function equality': () => {
            const numberType = Type.number();
            const functionType = Type.function(Type.number(), Type.syllable());
            
            if (numberType.equals(functionType)) {
                throw new Error('Primitive and function types should not be equal');
            }
        },
    },

    'Type Formatting': {
        'should format primitive types correctly': () => {
            const tests = [
                { type: Type.number(), expected: 'number' },
                { type: Type.syllable(), expected: 'syllable' },
                { type: Type.syllables(), expected: 'syllables' },
                { type: Type.raisedGesture(), expected: 'raisedGesture' },
            ];
            
            for (const test of tests) {
                if (test.type.format() !== test.expected) {
                    throw new Error(`Expected '${test.expected}', got '${test.type.format()}'`);
                }
            }
        },

        'should format simple function types correctly': () => {
            const tests = [
                { 
                    type: Type.function(Type.number(), Type.syllable()),
                    expected: 'number -> syllable'
                },
                { 
                    type: Type.function(Type.syllable(), Type.raisedGesture()),
                    expected: 'syllable -> raisedGesture'
                },
                { 
                    type: Type.function(Type.syllables(), Type.number()),
                    expected: 'syllables -> number'
                },
            ];
            
            for (const test of tests) {
                if (test.type.format() !== test.expected) {
                    throw new Error(`Expected '${test.expected}', got '${test.type.format()}'`);
                }
            }
        },

        'should format nested function types with proper parentheses': () => {
            const tests = [
                {
                    // (number -> syllable) -> raisedGesture
                    type: Type.function(
                        Type.function(Type.number(), Type.syllable()),
                        Type.raisedGesture()
                    ),
                    expected: '(number -> syllable) -> raisedGesture'
                },
                {
                    // number -> (syllable -> raisedGesture) = number -> syllable -> raisedGesture
                    type: Type.function(
                        Type.number(),
                        Type.function(Type.syllable(), Type.raisedGesture())
                    ),
                    expected: 'number -> syllable -> raisedGesture'
                },
                {
                    // (number -> number) -> (syllable -> syllable)
                    type: Type.function(
                        Type.function(Type.number(), Type.number()),
                        Type.function(Type.syllable(), Type.syllable())
                    ),
                    expected: '(number -> number) -> syllable -> syllable'
                },
                {
                    // left: (number -> number) -> number
                    type: Type.function(
                        Type.function(Type.number(), Type.number()),
                        Type.number()
                    ),
                    expected: '(number -> number) -> number'
                },
                {
                    // right: number -> (number -> number)
                    type: Type.function(
                        Type.number(),
                        Type.function(Type.number(), Type.number())
                    ),
                    expected: 'number -> number -> number'
                },
            ];
            
            for (const test of tests) {
                if (test.type.format() !== test.expected) {
                    throw new Error(`Expected '${test.expected}', got '${test.type.format()}'`);
                }
            }
        },
    },

    'Edge Cases': {
        'should handle identity function types': () => {
            const identityNumber = Type.function(Type.number(), Type.number());
            const identitySyllable = Type.function(Type.syllable(), Type.syllable());
            
            if (identityNumber.equals(identitySyllable)) {
                throw new Error('Identity functions of different types should not be equal');
            }
            
            if (identityNumber.format() !== 'number -> number') {
                throw new Error(`Expected 'number -> number', got '${identityNumber.format()}'`);
            }
        },

        'should handle constant function types': () => {
            // number -> syllable (ignores input, returns constant)
            const constantFunction = Type.function(Type.number(), Type.syllable());
            
            if (constantFunction.format() !== 'number -> syllable') {
                throw new Error(`Expected 'number -> syllable', got '${constantFunction.format()}'`);
            }
        },

        'should handle curried function types': () => {
            // Simulating add: number -> number -> number
            const addType = Type.function(
                Type.number(),
                Type.function(Type.number(), Type.number())
            );
            
            if (addType.format() !== 'number -> number -> number') {
                throw new Error(`Expected 'number -> number -> number', got '${addType.format()}'`);
            }
        },
    },

    'Type Construction Validation': {
        'should create all built-in primitive types': () => {
            const primitiveTypes = ['number', 'syllable', 'syllables', 'raisedGesture'];
            const createdTypes = [
                Type.number(),
                Type.syllable(),
                Type.syllables(),
                Type.raisedGesture()
            ];
            
            for (let i = 0; i < primitiveTypes.length; i++) {
                if (createdTypes[i].format() !== primitiveTypes[i]) {
                    throw new Error(`Expected '${primitiveTypes[i]}', got '${createdTypes[i].format()}'`);
                }
            }
        },

        'should maintain type immutability': () => {
            const originalType = Type.number();
            const functionType = Type.function(originalType, Type.syllable());
            
            // Original type should remain unchanged
            if (originalType.format() !== 'number') {
                throw new Error('Original type was modified during function creation');
            }
            
            if (functionType.format() !== 'number -> syllable') {
                throw new Error('Function type was not created correctly');
            }
        },
    },
};

// Function to run all type tests
export function runTypeTests(): { passed: number; failed: number } {
    let passed = 0;
    let failed = 0;

    console.log('🧪 Running Type Class Tests\n');

    for (const [categoryName, category] of Object.entries(typeTests)) {
        console.log(`📂 ${categoryName}`);
        
        for (const [testName, testFn] of Object.entries(category)) {
            try {
                testFn();
                console.log(`  ✅ ${testName}`);
                passed++;
            } catch (error) {
                console.log(`  ❌ ${testName}: ${error instanceof Error ? error.message : String(error)}`);
                failed++;
            }
        }
        console.log('');
    }

    console.log(`📊 Type Tests Results: ${passed} passed, ${failed} failed`);
    return { passed, failed };
}

// Function to run a specific test category
export function runTypeTestCategory(categoryName: string): { passed: number; failed: number } {
    const category = typeTests[categoryName as keyof typeof typeTests];
    if (!category) {
        throw new Error(`Test category '${categoryName}' not found`);
    }

    let passed = 0;
    let failed = 0;

    console.log(`🧪 Running ${categoryName} tests\n`);

    for (const [testName, testFn] of Object.entries(category)) {
        try {
            testFn();
            console.log(`  ✅ ${testName}`);
            passed++;
        } catch (error) {
            console.log(`  ❌ ${testName}: ${error instanceof Error ? error.message : String(error)}`);
            failed++;
        }
    }

    console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
    return { passed, failed };
}

// If this file is run directly, execute all type tests
if (require.main === module) {
    runTypeTests();
}

# MotorMusic Static Analysis Tests

This directory contains comprehensive tests for the MotorMusic language's type system and static analysis functionality.

## Structure

- `TestTypes.ts` - Tests for the `Type` class including all factory methods, equality checking, and type formatting
- `TestStatics.ts` - Tests for the static analysis listener functionality including type checking, scoping, and error detection
- `index.ts` - Test runner that can execute both test suites individually or together

## Running Tests

### From TypeScript

```typescript
import { runAllTests, runOnlyTypeTests, runOnlyStaticAnalysisTests } from './main/test/statics';

// Run all tests
const results = runAllTests();

// Run only Type class tests
const typeResults = runOnlyTypeTests();

// Run only static analysis tests
const staticResults = runOnlyStaticAnalysisTests();
```

### Individual Test Categories

You can also run specific categories of tests:

```typescript
import { runTypeTestCategory } from './main/test/statics/TestTypes';
import { runStaticAnalysisTestCategory } from './main/test/statics/TestStatics';

// Run specific Type test categories
runTypeTestCategory('Primitive Types');
runTypeTestCategory('Function Types');
runTypeTestCategory('Type Equality');

// Run specific Static Analysis test categories
runStaticAnalysisTestCategory('Basic Types');
runStaticAnalysisTestCategory('Function Declarations');
runStaticAnalysisTestCategory('Variable Scoping');
```

## Test Categories

### Type Class Tests (`TestTypes.ts`)

- **Primitive Types**: Testing creation of number, syllable, syllables, raisedGesture types
- **Type Classification**: Testing isNumber(), isSyllable(), isSyllables(), isRaisedGesture(), isSyllabic(), isGesture() methods
- **Function Types**: Testing function type creation and nested function types
- **Type Equality**: Testing structural equality between types
- **Type Formatting**: Testing string representation of types with proper right-associative function syntax
- **Edge Cases**: Testing identity functions, constant functions, curried functions
- **Type Construction Validation**: Testing immutability and proper creation

### Static Analysis Tests (`TestStatics.ts`)

- **Basic Types**: Testing parsing and typing of literals, syllables, and syllable groups
- **Function Declarations**: Testing named functions, anonymous functions, and recursive functions
- **Function Type Errors**: Testing type mismatches, wrong arguments, and unknown types
- **Variable Scoping**: Testing parameter access, shadowing, and undefined variables
- **Function Calls**: Testing valid calls, chained calls, and invalid calls
- **Gestures**: Testing direction specifications and containment
- **Wrapped Expressions**: Testing parenthesized expressions and type preservation
- **Complex Scenarios**: Testing advanced type system features
- **Type System Consistency**: Testing type consistency across multiple declarations
- **Edge Cases**: Testing empty programs, deep nesting, and complex patterns
- **Program Validation**: Testing that programs resolve to gesture types (syllable, syllables, or raisedGesture)

## Helper Functions

### For Type Tests
- `runTypeTests()` - Run all Type class tests
- `runTypeTestCategory(categoryName)` - Run specific Type test category

### For Static Analysis Tests
- `parseAndAnalyze(input)` - Parse input and return errors and listener
- `expectNoErrors(input)` - Assert that input parses without errors
- `expectErrors(input, count?)` - Assert that input produces errors
- `expectErrorContaining(input, message)` - Assert that input produces error containing specific message
- `runAllStaticAnalysisTests()` - Run all static analysis tests
- `runStaticAnalysisTestCategory(categoryName)` - Run specific static analysis test category

## Test Output

Tests provide colored console output:
- ✅ for passing tests
- ❌ for failing tests
- 📂 for test categories
- 📊 for result summaries

Example output:
```
🧪 Running Type Class Tests

📂 Primitive Types
  ✅ should create number type
  ✅ should create syllable type
  ✅ should create syllables type
  ✅ should create raisedGesture type

📊 Type Tests Results: 4 passed, 0 failed
```

## Adding New Tests

### For Type Class
Add new test categories to the `typeTests` object in `TestTypes.ts`:

```typescript
'New Category': {
    'test name': () => {
        // Test implementation
        const result = Type.someMethod();
        if (result.format() !== 'expected') {
            throw new Error('Test failed');
        }
    }
}
```

### For Static Analysis
Add new test categories to the `staticAnalysisTests` object in `TestStatics.ts`:

```typescript
'New Category': {
    'test name': () => {
        console.log('Testing something...');
        expectNoErrors('valid input');
        expectErrors('invalid input');
        expectErrorContaining('bad input', 'expected error message');
    }
}
```

## Dependencies

These tests require:
- ANTLR4 TypeScript runtime
- Generated MotorMusic parser and lexer
- Type class and MotorMusicParserStaticAnalysisListener from Statics.ts
- ParserError class from Compile.ts

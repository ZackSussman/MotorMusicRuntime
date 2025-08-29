import { MotorMusicParserStaticAnalysisListener } from '../../src/typescript/ParserListeners/Statics';
import { ParserError } from '../../src/typescript/Compile';
import MotorMusicLexer from '../../../antlr/generated/MotorMusicLexer';
import MotorMusicParser from '../../../antlr/generated/MotorMusicParser';
import { CharStream, CommonTokenStream, ParseTreeWalker } from 'antlr4';

// Global flag for stack trace printing (can be set by test runner)
declare global {
    var showStackTrace: boolean;
}

// Check for command line arguments to enable stack traces
const showStackTrace = process.argv.includes('--stack-trace') || process.argv.includes('-s') || 
                      (global as any).showStackTrace || 
                      process.env.SHOW_STACK_TRACE === 'true';

// Helper function to parse and analyze code
function parseAndAnalyze(input: string): { errors: ParserError[], listener: MotorMusicParserStaticAnalysisListener } {
    try {
        const chars = new CharStream(input);
        const lexer = new MotorMusicLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new MotorMusicParser(tokens);
        
        const parseTree = parser.compilationUnit();
        const listener = new MotorMusicParserStaticAnalysisListener();
        
        // Walk the parse tree with our listener using the same pattern as Compile.ts
        ParseTreeWalker.DEFAULT.walk(listener, parseTree);
        
        return { errors: listener.errors, listener };
    } catch (error) {
        if (showStackTrace) {
            console.log(`Error in parseAndAnalyze for input "${input}":`, error);
            if (error instanceof Error && error.stack) {
                console.log('Stack trace:', error.stack);
            }
        }
        // Wrap the error with input information
        if (error instanceof Error) {
            throw new Error(`Error while processing input "${input}": ${error.message}`);
        }
        throw new Error(`Error while processing input "${input}": ${error}`);
    }
}

// Helper functions for test assertions
function expectNoErrors(input: string): void {
    const { errors } = parseAndAnalyze(input);
    if (errors.length > 0) {
        throw new Error(`Expected no errors for input "${input}", but got: ${errors.map(e => e.message).join(', ')}`);
    }
}

function expectErrors(input: string, expectedErrorCount?: number): ParserError[] {
    const { errors } = parseAndAnalyze(input);
    if (errors.length === 0) {
        throw new Error(`Expected errors for input "${input}", but got none`);
    }
    if (expectedErrorCount !== undefined && errors.length !== expectedErrorCount) {
        throw new Error(`Expected ${expectedErrorCount} errors for input "${input}", but got ${errors.length}`);
    }
    return errors;
}

function expectErrorContaining(input: string, expectedMessage: string): void {
    try {
        const { errors } = parseAndAnalyze(input);
        const found = errors.some(error => error.message.includes(expectedMessage));
        if (!found) {
            if (errors.length === 0) {
                console.log(`Debug: Input "${input}" gave no errors`);
            } else {
                console.log(`Debug: Input "${input}" produced errors:`, errors.map(e => e.message));
            }
            throw new Error(`Expected error containing "${expectedMessage}" for input "${input}", but got: ${errors.map(e => e.message).join(', ')}`);
        }
    } catch (error) {
        if (error instanceof Error && error.message.startsWith('Expected error containing')) {
            throw error; // Re-throw our own assertion errors
        }
        if (showStackTrace) {
            console.log(`Unexpected error in expectErrorContaining for input "${input}":`, error);
            if (error instanceof Error && error.stack) {
                console.log('Stack trace:', error.stack);
            }
        }
        throw error;
    }
}

// Test suite organized as an object for easy execution
export const staticAnalysisTests = {
    // Basic Types
    'Basic Types': {
        'numbers': () => {
            console.log('Testing number literals...');
            expectErrorContaining('42', 'program must be a gesture');
            expectErrorContaining('0', 'number literal cannot be zero');
            expectErrorContaining('999', 'program must be a gesture');
        },

        'syllables': () => {
            console.log('Testing syllable identifiers...');
            expectNoErrors('a');
            expectNoErrors('hello');
            expectNoErrors('syllable');
        },

        'emptySyllables': () => {
            console.log('Testing empty syllables...');
            expectNoErrors('_');
            expectNoErrors('42_');
            expectNoErrors('1_');
        },

        'syllableGroups': () => {
            console.log('Testing syllable groups...');
            expectNoErrors('a&b');
            expectNoErrors('hello&world&test');
            expectNoErrors('a&b&c&d');
            expectNoErrors('42a&b');
            expectNoErrors('100a&b&c');
        }
    },

    // Function Declarations
    'Function Declarations': {
        'basicFunctions': () => {
            console.log('Testing basic function declarations...');
            expectErrorContaining('fn add(x: number): number => 42; add(1)', 'program must be a gesture');
            expectNoErrors('fn toSyllable(x: number): syllable => a; toSyllable(42)');
            expectNoErrors('fn makeGesture(x: syllable): raisedGesture => (x.); makeGesture(a)');
        },

        'builtInTypes': () => {
            console.log('Testing built-in type declarations...');
            expectNoErrors('fn f(x: number): syllable => a; f(42)');
            expectNoErrors('fn g(x: syllable): raisedGesture => (a.); g(a)');
            expectErrorContaining('fn h(x: syllables): number => 42; h(a&b)', 'program must be a gesture');
        },

        'anonymousFunctions': () => {
            console.log('Testing anonymous functions...');
            expectErrorContaining('fn(x: number): syllable => a', 'program must be a gesture');
            expectErrorContaining('fn(x: syllable): raisedGesture => (x.)', 'program must be a gesture');
        },

        'recursiveFunctions': () => {
            console.log('Testing recursive functions...');
            expectErrorContaining('fn fact(n: number): number => fact(n); fact(5)', 'Tried to call a non-function type');
        }
    },

    // Function Type Errors
    'Function Type Errors': {
        'typeMismatches': () => {
            console.log('Testing function type mismatches...');
            expectErrors('fn bad(x: number): syllable => 42; bad(1)');
            expectErrors('fn badSecond(x: syllable): number => a; badSecond(a)');
        },

        'wrongArgumentTypes': () => {
            console.log('Testing wrong argument types...');
            expectErrors('fn f(x: number): syllable => a; f(a)');
            expectErrors('fn g(x: syllable): number => 42; g(42)');
        },

        'unknownBuiltInTypes': () => {
            console.log('Testing unknown built-in types...');
            expectErrorContaining('fn f(x: unknown): syllable => a; f(42)', 'Unknown built-in type');
            expectErrorContaining('fn g(x: syllable): invalid => a; g(a)', 'Unknown built-in type');
        },

        'nameConflicts': () => {
            console.log('Testing name conflicts...');
            expectErrorContaining('fn f(x: number): number => 42; fn f(y: syllable): syllable => a; f(1)', 'already in scope');
            expectErrorContaining('fn f(x: number): number => 42; fn g(f: syllable): number => 42; g(a)', "interfere with");
        }
    },

    // Variable Scoping
    'Variable Scoping': {
        'parameterAccess': () => {
            console.log('Testing parameter access...');
            expectNoErrors('fn f(x: syllable): syllable => x; f(gas)');
            expectNoErrors('fn g(x: syllables): syllables => x; g(gas&tank)');
        },

        'shadowing': () => {
            console.log('Testing variable shadowing...');
            expectNoErrors('fn f(x: syllable): syllable => (fn g(x: number): number => x; tough); f(man)');
        }
    },

    // Function Calls
    'Function Calls': {
        'validCalls': () => {
            console.log('Testing valid function calls...');
            expectNoErrors('fn f(x: number): syllable => a; f(42)');
            expectNoErrors('fn g(x: syllable -> number): syllable => yoooo; g(fn (y : syllable): number => 42)');
        },

        'chainedCalls': () => {
            console.log('Testing chained function calls...');
            expectNoErrors('fn f(x: number): syllable => a; fn g(x: syllable): raisedGesture => (x.); g(f(42))');
        },

        'invalidCalls': () => {
            console.log('Testing invalid function calls...');
            expectErrorContaining('42(a)', 'Tried to call a non-function type');
            expectErrorContaining('a(42)', 'Tried to call a non-function type');
        }
    },

    // Gestures
    'Gestures': {
        'directionSpecs': () => {
            console.log('Testing direction specifications...');
            expectNoErrors('(a.)');
            expectNoErrors('(a^)');
            expectNoErrors('(a.b^)');
            expectNoErrors('(a.b.c^)');
            expectErrorContaining('fn f(x: raisedGesture): number => 42; f((a.))', 'program must be a gesture');
        },

        'containment': () => {
            console.log('Testing containment...');
            expectNoErrors('a{b.}');
            expectNoErrors('hello{world.}');
            expectNoErrors('a&b{c.d^}');
            expectNoErrors('a&b{c&d.}');
            expectNoErrors('x{y&z.w^}');
            expectErrorContaining('fn f(x: raisedGesture): number => 42; f(a{b.})', 'program must be a gesture');
        },

        'invalidContainment': () => {
            console.log('Testing invalid containment...');
            expectErrorContaining('42{a.}', 'expected a syllable within syllable group');
            expectErrorContaining('(fn bro (x : raisedGesture) : raisedGesture => x; bro((a.))){b.}', 'expected a syllable within syllable group');
        }
    },

    // Wrapped Expressions
    'Wrapped Expressions': {
        'basicWrapping': () => {
            console.log('Testing wrapped expressions...');
            expectNoErrors('(a&(b)&c)');
            expectNoErrors('(a)');
            expectNoErrors('((a.))');
        },

        'typePreservation': () => {
            console.log('Testing type preservation through wrapping...');
            expectNoErrors('fn l (x : syllable) : number => (fn f(x: number): number => x; f((42))); a');
            expectNoErrors('fn g(x: syllable): syllable => x; g((a))');
        },

        'nestedWrapping': () => {
            console.log('Testing nested wrapping...');
            expectNoErrors('(((45a)))');
            expectNoErrors('fn f (x: number): syllable => 38tom; f((((42))))');
        }
    },

    // Complex Scenarios
    'Complex Scenarios': {
        'functionsReturningFunctions': () => {
            console.log('Testing functions that return functions...');
            expectNoErrors('fn makeGrouper(x: syllable): syllable -> syllables => fn(y: syllable): syllables => x&y; makeGrouper(bro)(kk)');
        },

        'mixedContexts': () => {
            console.log('Testing mixed expression and gesture contexts...');
            expectNoErrors('fn processGesture(g: raisedGesture): syllable => a; processGesture((hel.lo))');
        },

        'timeTaggedExpressions': () => {
            console.log('Testing time-tagged complex expressions...');
            expectNoErrors('fn raise(x : syllables) : raisedGesture => (x.); raise(20bro&ham)');
        },

        'complexTypeErrors': () => {
            console.log('Testing complex type errors...');
            expectErrors('fn f(x: number): syllable => a; fn g(x: syllable): raisedGesture => (x.); g(f(a))');
        }
    },

    // Type System Consistency
    'Type System Consistency': {
        'multipleDeclarations': () => {
            console.log('Testing type consistency across multiple declarations...');
            expectNoErrors('fn f(x: number): syllable => a; fn g(x: syllable): raisedGesture => (x.); fn h(x: raisedGesture): raisedGesture => (x . x); h(g(f(42)))');
        },

        'typeInconsistencies': () => {
            console.log('Testing type inconsistencies...');
            expectErrors('fn f(x: number): syllable => 42; fn g(x: syllable): number => a; g(f(42))');
        },

        'syllableVsSyllables': () => {
            console.log('Testing syllable vs syllables distinction...');
            expectNoErrors('fn single(x: syllable): number => 42; fn multi(x: syllables): syllable => _; single(a) multi(a&b)');
            expectErrors('fn single(x: syllable): number => 42; single(a&b)');
        }
    },

    // Edge Cases
    'Edge Cases': {
        'emptyPrograms': () => {
            console.log('Testing empty programs...');
            expectNoErrors('');
        },

        'deepNesting': () => {
            console.log('Testing deeply nested expressions...');
            expectErrorContaining('((((((42))))))', 'program must be a gesture');
        },

        'complexSyllableGroups': () => {
            console.log('Testing complex syllable group patterns...');
            expectNoErrors('a&b&c&d&e');
            expectNoErrors('42a&b&c');
        }
    },

    // Program-Level Validation
    'Program Validation': {
        'validGesturePrograms': () => {
            console.log('Testing valid gesture programs...');
            expectNoErrors('a'); // syllable
            expectNoErrors('a&b'); // syllables
            expectNoErrors('(a.)'); // raisedGesture
            expectNoErrors('a{b.}'); // containment -> raisedGesture
        },

        'invalidNonGesturePrograms': () => {
            console.log('Testing invalid non-gesture programs...');
            expectErrorContaining('42', 'program must be a gesture');
            expectErrorContaining('fn (x: number): number => 42', 'program must be a gesture');
        },

        'complexValidGesturePrograms': () => {
            console.log('Testing complex valid gesture programs...');
            expectNoErrors('fn f(x : number): syllable => a; f(1)'); // function call returning gesture
            expectNoErrors('fn g(x : number): raisedGesture => (a.); g(1)'); // function call returning gesture
            expectNoErrors('fn h(x: syllable): syllables => x&a; h(b)'); // function call returning gesture
        },

        'mixedValidAndInvalidPrograms': () => {
            console.log('Testing mixed scenarios with program validation...');
            // Valid: function returns gesture
            expectNoErrors('fn makeGesture(x : number -> number -> number): raisedGesture => (a.); makeGesture(fn (x : number) : number -> number => fn (x : number) : number => 42)');
            
            // Invalid: function returns number
            expectErrorContaining('fn getNumber(x : raisedGesture): number => 42; getNumber((_._^))', 'program must be a gesture');
            
            // Valid: wrapped gesture
            expectNoErrors('(a&b)');
            expectNoErrors('((a.))');
        },
    },
};

// Function to run all tests
export function runAllStaticAnalysisTests(): { passed: number; failed: number } {
    let passed = 0;
    let failed = 0;

    console.log('🧪 Running MotorMusic Static Analysis Tests\n');

    for (const [categoryName, category] of Object.entries(staticAnalysisTests)) {
        console.log(`📂 ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}`);
        
        for (const [testName, testFn] of Object.entries(category)) {
            try {
                testFn();
                console.log(`  ✅ ${testName}`);
                passed++;
            } catch (error) {
                console.log(`  ❌ ${testName}: ${error instanceof Error ? error.message : String(error)}`);
                if (showStackTrace && error instanceof Error && error.stack) {
                    console.log(`     Stack trace: ${error.stack}`);
                }
                failed++;
            }
        }
        console.log('');
    }

    console.log(`📊 Static Analysis Results: ${passed} passed, ${failed} failed`);
    return { passed, failed };
}

// Function to run a specific test category
export function runStaticAnalysisTestCategory(categoryName: string): { passed: number; failed: number } {
    const category = staticAnalysisTests[categoryName as keyof typeof staticAnalysisTests];
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
            if (showStackTrace && error instanceof Error && error.stack) {
                console.log(`     Stack trace: ${error.stack}`);
            }
            failed++;
        }
    }

    console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
    return { passed, failed };
}

// Export individual helper functions for custom testing
export { parseAndAnalyze, expectNoErrors, expectErrors, expectErrorContaining };

// If this file is run directly, execute all static analysis tests
if (require.main === module) {
    runAllStaticAnalysisTests();
}

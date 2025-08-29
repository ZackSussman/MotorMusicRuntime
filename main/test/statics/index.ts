import { runTypeTests } from './TestTypes';
import { runAllStaticAnalysisTests } from './TestStatics';

/**
 * Main test runner for all static analysis tests
 */
export function runAllTests(): { passed: number; failed: number } {
    console.log('🚀 Running MotorMusic Static Analysis Test Suite\n');
    console.log('=' .repeat(60));
    
    // Run Type class tests
    console.log('\n🔧 TYPE CLASS TESTS');
    console.log('=' .repeat(60));
    const typeResults = runTypeTests();
    
    // Run Static Analysis tests
    console.log('\n🔍 STATIC ANALYSIS TESTS');
    console.log('=' .repeat(60));
    const staticResults = runAllStaticAnalysisTests();
    
    // Combine results
    const totalPassed = typeResults.passed + staticResults.passed;
    const totalFailed = typeResults.failed + staticResults.failed;
    
    console.log('\n' + '=' .repeat(60));
    console.log('📋 FINAL RESULTS');
    console.log('=' .repeat(60));
    console.log(`Type Tests:           ${typeResults.passed} passed, ${typeResults.failed} failed`);
    console.log(`Static Analysis Tests: ${staticResults.passed} passed, ${staticResults.failed} failed`);
    console.log('-' .repeat(60));
    console.log(`TOTAL:                ${totalPassed} passed, ${totalFailed} failed`);
    
    if (totalFailed === 0) {
        console.log('🎉 All tests passed!');
    } else {
        console.log(`⚠️  ${totalFailed} test(s) failed`);
    }
    
    return { passed: totalPassed, failed: totalFailed };
}

/**
 * Run only Type class tests
 */
export function runOnlyTypeTests(): { passed: number; failed: number } {
    console.log('🔧 Running Type Class Tests Only\n');
    return runTypeTests();
}

/**
 * Run only Static Analysis tests
 */
export function runOnlyStaticAnalysisTests(): { passed: number; failed: number } {
    console.log('🔍 Running Static Analysis Tests Only\n');
    return runAllStaticAnalysisTests();
}

// If this file is run directly, execute all tests
if (require.main === module) {
    runAllTests();
}

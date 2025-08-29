#!/usr/bin/env node

const ts = require('ts-node');

// Configure ts-node for transpilation
ts.register({
    transpileOnly: true,
    compilerOptions: {
        module: 'commonjs',
        target: 'es2020',
        moduleResolution: 'node',
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        skipLibCheck: true
    }
});

// Parse command line arguments BEFORE requiring TestStatics
const args = process.argv.slice(2);
const showStackTrace = args.includes('--stack-trace') || args.includes('-s');

// Set global flag for stack trace printing BEFORE requiring TestStatics
global.showStackTrace = showStackTrace;

const { staticAnalysisTests, parseAndAnalyze, expectNoErrors, expectErrors, expectErrorContaining } = require('./TestStatics.ts');

function runCategoryTests(categoryName) {
    console.log(`🧪 Running all tests in category: ${categoryName}\n`);
    
    const category = staticAnalysisTests[categoryName];
    if (!category) {
        console.error(`❌ Category '${categoryName}' not found`);
        console.log('Available categories:');
        Object.keys(staticAnalysisTests).forEach(cat => console.log(`  - ${cat}`));
        process.exit(1);
    }
    
    let passed = 0;
    let failed = 0;
    let failedTests = [];
    
    console.log(`📂 ${categoryName}`);
    for (const [testName, testFn] of Object.entries(category)) {
        try {
            testFn();
            console.log(`  ✅ ${testName}`);
            passed++;
        } catch (error) {
            console.log(`  ❌ ${testName}: ${error.message}`);
            if (showStackTrace && error.stack) {
                console.log(`     Stack trace: ${error.stack}`);
            }
            failed++;
            failedTests.push(testName);
        }
        console.log(); // Add blank line between tests
    }
    
    console.log(`📊 Results: ${passed} passed, ${failed} failed`);
    if (failed > 0) {
        console.log(`\n❌ Failed tests: ${failedTests.join(', ')}`);
        process.exit(1);
    }
}

function runSingleTest(categoryName, testName) {
    console.log(`🧪 Running single test: ${categoryName} -> ${testName}\n`);
    
    const category = staticAnalysisTests[categoryName];
    if (!category) {
        console.error(`❌ Category '${categoryName}' not found`);
        console.log('Available categories:');
        Object.keys(staticAnalysisTests).forEach(cat => console.log(`  - ${cat}`));
        process.exit(1);
    }
    
    const testFn = category[testName];
    if (!testFn) {
        console.error(`❌ Test '${testName}' not found in category '${categoryName}'`);
        console.log(`Available tests in ${categoryName}:`);
        Object.keys(category).forEach(test => console.log(`  - ${test}`));
        process.exit(1);
    }
    
    try {
        testFn();
        console.log(`✅ Test passed: ${categoryName} -> ${testName}`);
    } catch (error) {
        console.log(`❌ Test failed: ${categoryName} -> ${testName}`);
        console.log(`Error: ${error.message}`);
        if (showStackTrace && error.stack) {
            console.log(`Stack trace: ${error.stack}`);
        }
        process.exit(1);
    }
}

function listAllTests() {
    console.log('📋 Available tests:\n');
    for (const [categoryName, category] of Object.entries(staticAnalysisTests)) {
        console.log(`📂 ${categoryName}`);
        for (const testName of Object.keys(category)) {
            console.log(`  - ${testName}`);
        }
        console.log('');
    }
}

if (args.length === 0) {
    console.log('Usage:');
    console.log('  node run-single-test.js <category> <test>   # Run specific test');
    console.log('  node run-single-test.js <category>         # Run all tests in category');
    console.log('  node run-single-test.js --list             # List all available tests');
    console.log('');
    console.log('Options:');
    console.log('  --stack-trace, -s                          # Show stack traces on errors');
    console.log('');
    console.log('Examples:');
    console.log('  node run-single-test.js "Basic Types" "numbers"');
    console.log('  node run-single-test.js "Function Declarations"');
    console.log('  node run-single-test.js "Function Declarations" "basicFunctions" --stack-trace');
    process.exit(0);
}

if (args[0] === '--list' || args[0] === '-l') {
    listAllTests();
} else if (args.length >= 1) {
    // Filter out flags to get category and test name
    const nonFlagArgs = args.filter(arg => !arg.startsWith('--') && !arg.startsWith('-'));
    
    if (nonFlagArgs.length === 1) {
        // Run all tests in the category
        runCategoryTests(nonFlagArgs[0]);
    } else if (nonFlagArgs.length === 2) {
        // Run specific test
        runSingleTest(nonFlagArgs[0], nonFlagArgs[1]);
    } else {
        console.error('❌ Invalid arguments. Need 1 argument (category) or 2 arguments (category and test name).');
        process.exit(1);
    }
} else {
    console.error('❌ Invalid arguments. Use --help for usage information.');
    process.exit(1);
}

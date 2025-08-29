#!/usr/bin/env node

// Simple test runner that can be executed directly
// Usage: node run-tests.js [type|static|all]

const path = require('path');
const { exec } = require('child_process');

// Get the test type from command line arguments
const args = process.argv.slice(2);
const testType = args.find(arg => !arg.startsWith('--') && !arg.startsWith('-')) || 'all';
const showStackTrace = args.includes('--stack-trace') || args.includes('-s');

console.log('🚀 MotorMusic Test Runner\n');

// Function to run TypeScript directly with ts-node
function runWithTsNode(command) {
    return new Promise((resolve, reject) => {
        // Add stack trace flag to environment if requested
        const env = { ...process.env };
        if (showStackTrace) {
            env.SHOW_STACK_TRACE = 'true';
        }
        
        exec(command, { 
            cwd: path.join(__dirname, '../../..'),
            env: env
        }, (error, stdout, stderr) => {
            if (error) {
                console.error('❌ Error running tests:', error.message);
                if (stderr) console.error('stderr:', stderr);
                reject(error);
            } else {
                console.log(stdout);
                if (stderr) console.warn('warnings:', stderr);
                resolve();
            }
        });
    });
}

// Function to compile and run tests
async function runTests() {
    try {
        switch (testType.toLowerCase()) {
            case 'type':
            case 'types':
                console.log('🔧 Running Type Class Tests Only...\n');
                await runWithTsNode(`npx ts-node --project main/test/statics/tsconfig.json --transpile-only main/test/statics/TestTypes.ts${showStackTrace ? ' --stack-trace' : ''}`);
                break;
                
            case 'static':
            case 'analysis':
                console.log('🔍 Running Static Analysis Tests Only...\n');
                await runWithTsNode(`npx ts-node --project main/test/statics/tsconfig.json --transpile-only main/test/statics/TestStatics.ts${showStackTrace ? ' --stack-trace' : ''}`);
                break;
                
            case 'all':
            default:
                console.log('🧪 Running All Tests...\n');
                await runWithTsNode(`npx ts-node --project main/test/statics/tsconfig.json --transpile-only main/test/statics/index.ts${showStackTrace ? ' --stack-trace' : ''}`);
                break;
        }
        
        console.log('\n✅ Test execution completed successfully!');
    } catch (error) {
        console.error('\n❌ Test execution failed!');
        process.exit(1);
    }
}

// Show usage if help is requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Usage: node run-tests.js [test-type] [options]

Test Types:
  all     - Run all tests (default)
  type    - Run only Type class tests
  static  - Run only Static Analysis tests

Options:
  --stack-trace, -s  - Show stack traces on test failures

Examples:
  node run-tests.js
  node run-tests.js type
  node run-tests.js static --stack-trace
  node run-tests.js all -s
`);
    process.exit(0);
}

// Run the tests
runTests();

const { parseAndAnalyze } = require('./TestStatics');

console.log("Testing if '(a.){b.}' parses...");

try {
    const result = parseAndAnalyze('(a.){b.}');
    console.log("✅ Parsing succeeded");
    console.log("Errors:", result.errors);
    console.log("Number of errors:", result.errors.length);
} catch (error) {
    console.log("❌ Parsing failed with error:", error.message);
}

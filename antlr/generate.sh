#!/bin/bash

# ANTLR Grammar Generation Script
# This script generates TypeScript parser and lexer files from ANTLR grammar files

set -e  # Exit on any error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

ANTLR_JAR="antlr-4.13.1-complete.jar"
ANTLR_URL="https://www.antlr.org/download/antlr-4.13.1-complete.jar"
OUTPUT_DIR="generated"
LEXER_GRAMMAR="MotorMusicLexer.g4"
PARSER_GRAMMAR="MotorMusicParser.g4"

echo "🔧 ANTLR Grammar Generation"
echo "=========================="

# Check if ANTLR JAR exists, download if not
if [ ! -f "$ANTLR_JAR" ]; then
    echo "📥 Downloading ANTLR JAR..."
    curl -L -o "$ANTLR_JAR" "$ANTLR_URL"
    echo "✅ ANTLR JAR downloaded"
else
    echo "✅ ANTLR JAR found"
fi

# Check if grammar files exist
if [ ! -f "$LEXER_GRAMMAR" ]; then
    echo "❌ Error: $LEXER_GRAMMAR not found"
    exit 1
fi

if [ ! -f "$PARSER_GRAMMAR" ]; then
    echo "❌ Error: $PARSER_GRAMMAR not found"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Generate TypeScript files
echo "🚀 Generating TypeScript files..."
java -jar "$ANTLR_JAR" \
    -Dlanguage=TypeScript \
    -visitor \
    -listener \
    -o "$OUTPUT_DIR" \
    "$LEXER_GRAMMAR" \
    "$PARSER_GRAMMAR"

if [ $? -eq 0 ]; then
    echo "✅ TypeScript files generated successfully in $OUTPUT_DIR/"
    echo ""
    echo "📁 Generated files:"
    ls -la "$OUTPUT_DIR"/*.ts 2>/dev/null || echo "   (No .ts files found)"
else
    echo "❌ Error: Generation failed"
    exit 1
fi

echo ""
echo "🎉 Done! Your grammar has been compiled to TypeScript."
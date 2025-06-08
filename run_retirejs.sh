#!/bin/bash
npm install -g retire
retire --path public/src/components --outputformat json --outputpath retire-report.txt
if grep -q '"data":[]' retire-report.txt; then
    echo "No vulnerabilities found." > retire-report.txt
fi

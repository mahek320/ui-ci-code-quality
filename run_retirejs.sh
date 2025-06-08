#!/bin/bash

# Install Retire.js
npm install -g retire

# Run Retire.js on the specified directory and output results in JSON format
retire --path public/src/components --outputformat json --outputpath retire-report.txt

# Check if retire-report.txt is empty and write default message if no vulnerabilities are found
if [ ! -s retire-report.txt ]; then
    echo "No vulnerabilities found." > retire-report.txt
fi

#!/bin/bash
echo "🚀 Building and running your app..."

# Try to open browser
if command -v xdg-open > /dev/null; then
    xdg-open http://localhost:8080
elif command -v open > /dev/null; then
    open http://localhost:8080
else
    echo "💡 Could not detect a browser opener. Please open http://localhost:8080 manually."
fi

docker-compose up --build

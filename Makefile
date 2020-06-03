build:
	@cp styles.css dist/styles.css
	@cp index.html dist/index.html
	@cp manifest.json dist/manifest.json
	@npx rollup -i index.js --format iife -o dist/index.js

dev:
	@npx live-server 

.PHONY: build dev 
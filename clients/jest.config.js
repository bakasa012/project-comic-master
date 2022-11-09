module.exports = {
	preset: 'jest-puppeteer',
	roots: [ 'src/tests' ],
	testTimeout: 30000,
	collectCoverage: false,
	coverageDirectory: "<rootDir>/.report-automation-test/coverage",
	coverageReporters: ["text", "json", "html"],
	"reporters": [
		"default",
		["./node_modules/jest-html-reporter", {
			"pageTitle": "Project-comic-app",
			"outputPath": ".report-automation-test/index.html",
			"includeFailureMsg": true
		}]
	]
};
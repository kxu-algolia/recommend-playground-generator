

function generatePackageJSON() {
	const packageJSON = {
	  "name": "Recommend Demo",
	  "version": "1.0.0",
	  "private": true,
	  "main": "src/app.js",
	  "scripts": {
	    "start": "parcel index.html --port 3000",
	    "build": "parcel build index.html",
	    "lint": "eslint .",
	    "lint:fix": "npm run lint -- --fix"
	  },
	  "dependencies": {
	    "@algolia/autocomplete-js": "^1.5.1",
	    "@algolia/autocomplete-theme-classic": "^1.5.1",
	    "@algolia/client-search": "^4.10.2",
	    "@algolia/recommend": "^4.14.2",
	    "@algolia/recommend-js": "^1.7.1",
	    "@algolia/ui-components-horizontal-slider-js": "^1.0.0",
	    "@algolia/ui-components-horizontal-slider-theme": "^1.0.0",
	    "@babel/runtime": "7.14.6",
	    "algoliasearch": "^4.10.2",
	    "preact": "10.5.13"
	  },
	  "devDependencies": {
	    "babel-eslint": "10.0.2",
	    "eslint": "5.7.0",
	    "eslint-config-algolia": "13.2.3",
	    "eslint-config-prettier": "3.6.0",
	    "eslint-plugin-import": "2.19.1",
	    "eslint-plugin-prettier": "3.1.2",
	    "parcel-bundler": "1.12.5",
	    "prettier": "1.19.1"
	  },
	  "keywords": [
	    "algolia",
	    "JavaScript",
	    "Client",
	    "algoliasearch"
	  ]
	};

	return packageJSON;
}

module.exports = { generatePackageJSON };
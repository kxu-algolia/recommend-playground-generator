import { getParameters } from "codesandbox/lib/api/define";
const { generatePackageJSON } 	= require("./generators/package-json");
const { generateIndexHTML } 	= require("./generators/index-html");
const { generateAppJS } 		= require("./generators/app-js");



const params = {
	appID    : '',
	apiKey   : '',
	indexName: ''
}


const parameters = getParameters({
  files: {
    "package.json": {
      content: generatePackageJSON()
    },
   	"index.html": {
		content: generateIndexHTML()
	},
	"src/app.js": {
		content: generateAppJS(params)
	}
  }
});
console.log("paramters", parameters);


document.body.innerHTML = `
<form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
  <input type="hidden" name="parameters" value="${parameters}" />
  <input type="submit" value="Generate Sandbox" />
</form>
`;


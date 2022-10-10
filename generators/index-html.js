

function generateIndexHTML() {

	const indexHTML = `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1, shrink-to-fit=no"
         />
      <title>Recommend: Shopping Cart Demo</title>
      <link rel="shortcut icon" type="image/x-icon" href="https://res.cloudinary.com/hilnmyskv/image/upload/c_fit,w_32,h_32/algolia-mark.ico">
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
   </head>
   <body>
      <div class="w-full max-w-6xl mx-auto px-4 m-4 flex-1 flex overflow-hidden">

         <!-- Main Content Container -->
         <div class="w-full">
            
            <!-- Shopping Cart -->
            <div id="container-shopping-cart" class="pt-2 mx-2 px-2">
               <div>
                  <div class="flex justify-between pb-2 mb-2">
                     <h1 class="text-2xl font-semibold">Products</h1>
                  </div>
                  <div id="autocomplete"></div>
               </div>

               <!-- Autocomplete -->
               <ol id="cart" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 my-2"></ol>
            </div>

            <!-- Related Products Grid -->
            <div id="container-related-products" class="invisible pt-2 mx-2 px-2">
               <div class="flex justify-between pb-2 mb-2">
                  <h1 class="text-2xl font-semibold">Related Products</h1>
               </div>
               <div id="hits" class="mb-2"></div>
            </div>
         </div>
         <!-- Sidebar Container: Control Panel -->
         <div id="control" class="mx-2 px-4 pt-2 w-32 sm:w-60 bg-gray-100 h-full">
            <h1 class="text-2xl font-semibold pb-4">Algolia Recommend</h1>
            <span class="block text-sm mb-2">Recommendations can be <strong>fully customized</strong> by setting filtering and fallback strategies.</span>
            <span class="block text-sm mb-2">
               <a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.algolia.com/doc/rest-api/recommend/">Read the docs</a>
            </span>

             <!--button class="px-2 py-05 border border-gray-200 text-xs bg-gray-50 rounded rounded-full hover:bg-red-100 hover:border-red-200">
                Reset Filters
             </button-->

            <div class="block my-6">
               <span class="text-gray-700 font-semibold">Filter Strategy
               </span>
               <form id="filterStrategy">
                  <div class="mt-2">
                     <div>
                        <input type="checkbox" name="filterStrategy" value="brand" />
                        <span class="ml-1 mr-4">Brand</span>
                     </div>
                     <div>
                        <input type="checkbox" name="filterStrategy" value="color" />
                        <span class="ml-1 mr-4">Color</span>
                     </div>
                     <div>
                        <input type="checkbox" name="filterStrategy" value="price" />
                        <span class="ml-1 mr-4">Price greater than</span>
                     </div>
                     <div>
                        <input type="checkbox" name="filterStrategy" value="best" />
                        <span class="ml-1 mr-4">Best Rated</span>
                     </div>
                     <div>
                        <input type="checkbox" name="filterStrategy" value="dedupe" />
                        <span class="ml-1 mr-4">Duplicates</span>
                     </div>
                  </div>
               </form>
            </div>
            <div class="block my-6">
               <span class="text-gray-700 font-semibold">Fallback Strategy</span>
               <form id="fallbackStrategy">
                  <div class="mt-2">
                     <div>
                        <input type="radio" name="fallbackStrategy" value="none" checked/>
                        <span class="ml-1 mr-4">None</span>
                     </div>
                     <div>
                        <input type="radio" name="fallbackStrategy" value="category" />
                        <span class="ml-1 mr-4">Category</span>
                     </div>
                     <div>
                        <input type="radio" name="fallbackStrategy" value="brand" />
                        <span class="ml-1 mr-4">Brand</span>
                     </div>
                     <div>
                        <input type="radio" name="fallbackStrategy" value="price" />
                        <span class="ml-1 mr-4">Price greater than</span>
                     </div>
                     <div>
                        <input type="radio" name="fallbackStrategy" value="best" />
                        <span class="ml-1 mr-4">Best Rated</span>
                     </div>
                  </div>
               </form>
            </div>


            <!--
            <div class="block my-6">
               <span class="text-gray-700 font-semibold">Threshold</span>
               <div class="inline-block">
                  <input id="threshold" class="bg-gray-100" type="number" name="threshold" min="0" max="100" value="0">
               </div>
            </div>
            -->

            <div class="block my-6">
               <form name="maxRecs">
                  <label for="maxRecs" class="text-gray-700 font-semibold">maxRecommendations</label>
                  <div class="mt-2">
                     <div>
                        <input type="radio" name="maxRecs" value="10" checked/>
                        <span class="ml-1 mr-4">10</span>
                     </div>
                     <div>
                        <input type="radio" name="maxRecs" value="20" />
                        <span class="ml-1 mr-4">20</span>
                     </div>
                     <div>
                        <input type="radio" name="maxRecs" value="30" />
                        <span class="ml-1 mr-4">30 (max)</span>
                     </div>
                  </div>
               </form>
            </div>

            <div class="block my-6">
               <span class="text-gray-700 font-semibold">Show Attribution</span>
               <div class="mt-2">
                  <input type="checkbox" id="attribution"/>
                  <span class="ml-1 mr-4">Attribution</span>
               </div>
            </div>

         </div>
      </div>
      <div class="w-full max-w-6xl mx-auto text-center py-4 text-gray-400">
         Explore the source on
         <span class="inline-block mb-2">
            <a class="underline text-blue-400 hover:text-blue-600 visited:text-purple-600" href="https://github.com/kxu-algolia/recommend-playground/">Github</a>
         </span>
      </div>
      <script src="./src/app.js"></script>
   </body>
</html>
`;


	return indexHTML;
}


module.exports = { generateIndexHTML };

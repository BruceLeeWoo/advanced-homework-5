#### Setup
 * Fork, clone, run yarn install, yarn start, pull request.
 * Install redux and react-redux.

#### Do
 * Create store.js to hold your redux store.
 * Import and use state from state.js to use as default state.
 * Import and use Provider in index.js to link store to components.
 * Create reducer functions to represent every piece of information in the store.
    * products - This reducer will either return the default state of the hard coded products, or if the action is “CREATE_PRODUCT”, it will add the product to the array of products and return the array.
    * categories - return the state as we will not add more categories.
 * Create an action creator called createProduct which will take in an product object and return an action with type = "CREATE_PRODUCT".
 * Change CategoryMenu to be a container and use mapStateToProps to get categories.
 * Make Products a container and mapStateToProps for products.
 * Create a new page for making a new product.
    * Create a new class component CreateProduct.
    * Create a container for CreateProduct that mapsStateToProps for the categories and mapsDispatchToProps for createProduct.
    * Create a form with a text box for name, description, and price.
    * Create a drop down populated with catgories.
    * Register onChange to assign the values to state properties.
    * Create a submit button.
    * onSubmit of the form call the function createProduct sending in an object representing the product.
    * Remember what happens when you submit a form be default.
  * Create a new route for CreateProduct and put a link to it in the nav bar.
  * Remove all passing of props except Shop still needs to pass its props to Products and App needs to pass its props to Product {...props}. This is to accommodate react router which we will fix later.
  * Change routes to use the component attribute now since we don’t have to pass props anymore (except for product route).

 




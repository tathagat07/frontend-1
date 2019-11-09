// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  addProductUrl: 'https://shopperzoid.stackroute.io:8443/product/api/v1/product',
  addBookUrl: 'https://shopperzoid.stackroute.io:8443/product/api/v1/book',
  searchProductUrl: 'https://shopperzoid.stackroute.io:8443/product/api/v1/product/details?productName=',
  updateProductUrl: 'https://shopperzoid.stackroute.io:8443/product/api/v1/product?productName=',
  authenticateUrl: 'https://shopperzoid.stackroute.io:8443/AuthUser/authenticate',
  loginUrl:'https://shopperzoid.stackroute.io:8443/AuthUser/login',
  registerUrl:'https://shopperzoid.stackroute.io:8443/AuthUser/register',
  buyerProfileGetUrl:'https://shopperzoid.stackroute.io:8443/buyerProfile/api/v1/buyer',
  buyerProfilePutUrl:'https://shopperzoid.stackroute.io:8443/buyerProfile/api/v1/buyer',
  buyerAddUrl:'https://shopperzoid.stackroute.io:8443/buyerProfile/api/v1/buyer',
  dealsUrl:'https://shopperzoid.stackroute.io:8443/deals/api/v1/products',
  findProductUrl:'https://shopperzoid.stackroute.io:8443/deals/api/v1/product',
  findProductByNameUrl:'https://shopperzoid.stackroute.io:8443/deals/api/v1/product',
  findSellerByIdUrl:'https://shopperzoid.stackroute.io:8443/deals/api/v1/products',
  getFromDatabaseUrl:'https://shopperzoid.stackroute.io:8443/sellerProfile/api/v1/seller',
  updateToDatabaseUrl:'https://shopperzoid.stackroute.io:8443/sellerProfile/api/v1/seller'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

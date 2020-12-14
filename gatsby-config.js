module.exports = {
  plugins: [
    // {
    //   resolve: "gatsby-source-wordpress-experimental",
    //   options: {
    //     url: "https://aksha.com/aksha-website",
    //   },
    // },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: "http://aksha.visit.2626.today",
        // The protocol. This can be http or https.
        protocol: "http",
        // The rest api route prefix that your WordPress site is using.
        // Sometimes this is modified by WordPress plugins.
        // If not set, it uses the default of "wp-json"
        restApiRoutePrefix: "wp-json",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // The IDs provided to this array should correspond to the `post_id` value when defining your
        // options page using the provided `acf_add_options_page` method, in your WordPress setup
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false,

          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "54793",
          wpcom_user: "gatsbyjswpexample@gmail.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,

          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set cookies that should be send with requests to WordPress as key value pairs
        cookies: {},
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
         // Set how many simultaneous requests are sent at once.
         concurrentRequests: 10,
         // Set WP REST API routes whitelists
         // and blacklists using glob patterns.
         // Defaults to whitelist the routes shown
         // in the example below.
         // See: https://github.com/isaacs/minimatch
         // Example:  `["/*/*/comments", "/yoast/**"]`
         // ` will either include or exclude routes ending in `comments` and
         // all routes that begin with `yoast` from fetch.
         // Whitelisted routes using glob patterns
         includedRoutes: [
           "**/categories",
           "**/posts",
           "**/pages",
           "**/media",
           "**/tags",
           "**/taxonomies",
           "**/users",
           "**/opinion"
         ],
         // Blacklisted routes using glob patterns
         excludedRoutes: ["**/posts/1456"],
         // Set this to keep media sizes.
         // This option is particularly useful in case you need access to
         // URLs for thumbnails, or any other media detail.
         // Defaults to false
         keepMediaSizes: false,
         // use a custom normalizer which is applied after the built-in ones.
         normalizer: function ({ entities }) {
           return entities
         },
         // The normalizers option allows you to manipulate the array of internal
         // normalizers that are applied to entities after they're fetched
         // from WordPress.
         // You can add your own normalizers to this array by adding an object
         // that contains name and normalizer properties.
         // Name is the name of your normalizer, and normalizer is a function that
         // should return the array of entities that are passed to it.
         // This is useful if you need more control over the order of normalizers,
         // instead of your normalizer being applied after the built in normalizers (as is the case with the normalizer option).
         normalizers: normalizers => [
           ...normalizers,
           {
             name: "nameOfTheFunction",
             normalizer: function ({ entities }) {
               // manipulate entities here
               return entities
             },
           },
         ],
       },
     },
    "gatsby-plugin-styled-components",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
  ],
};

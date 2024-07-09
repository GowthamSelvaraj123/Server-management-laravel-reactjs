<?php
return [

/*
|--------------------------------------------------------------------------
| Laravel CORS
|--------------------------------------------------------------------------
|
| allowed_origins, allowed_methods and allowed_headers can be set to array('*')
| to accept any value.
|
*/

'paths' => ['api/*', 'sanctum/csrf-cookie'], // Paths that are automatically enabled for CORS

'allowed_methods' => ['*'], // HTTP methods that are allowed

'allowed_origins' => ['*'], // Domains that are allowed to send CORS requests

'allowed_origins_patterns' => [], // Patterns for origins that are allowed to send CORS requests

'allowed_headers' => ['*'], // HTTP headers that are allowed

'exposed_headers' => [], // HTTP headers exposed to the browser

'max_age' => 0, // Number of seconds that preflight request can be cached by browser

'supports_credentials' => false, // Whether CORS requests with credentials are supported

];
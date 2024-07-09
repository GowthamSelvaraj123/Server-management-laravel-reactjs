<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/{any}', function () {
//     return view('welcome'); 
// })->where('any', '.*');

// Route::get('/check-db-connection', function () {
//     if (DB::connection()->getPdo()) {
//         return "Database connection is successful.";
//     } else {
//         return "Could not connect to the database.";
//     }
// });

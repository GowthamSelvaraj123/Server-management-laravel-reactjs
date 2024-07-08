<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;



Route::get('/{any}', function () {
    return view('welcome'); 
})->where('any', '.*');

Route::get('/check-db-connection', function () {
    if (DB::connection()->getPdo()) {
        return "Database connection is successful.";
    } else {
        return "Could not connect to the database.";
    }
});

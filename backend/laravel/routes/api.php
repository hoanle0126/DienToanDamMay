<?php

use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\DiscountCodeController;
use App\Http\Controllers\Api\FlashDealController;
use App\Http\Controllers\Api\HotDealController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\VoucherController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Resources\BrandResource;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\CityResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\Models\Brand;
use App\Models\Categories;
use App\Models\City;
use App\Models\District;
use App\Models\HotDeal;
use App\Models\Product;
use App\Models\Ward;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource("/categories", CategoriesController::class);
Route::apiResource("/brands", BrandController::class);
Route::post("/add-brands", function (Request $request) {
    $categories = HotDeal::all();
    foreach ($categories as $category) {
        $category->update(['url' => Str::slug($category->name)]);

    }
    return HotDeal::all();
});
Route::post("/add-products", function (Request $request) {

    foreach ($request->all() as $product) {
        $categories_id = Categories::where("name", $product['category'])->first();
        $brand_id = Brand::where("name", $product['brand'])->first();
        $existing = Product::where('name', $product['name'])->exists();
        if ($categories_id && $brand_id && !$existing) {
            Product::create([
                "name" => $product['name'],
                "english_name" => $product['english_name'] ? $product['english_name'] : "",
                "categories_id" => $categories_id->id,
                "brand_id" => $brand_id->id,
                "price" => $product['price'] ? $product['price'] : 100000,
                "sales" => $product['sales'],
                "images" => $product['images'],
                "quantity" => $product['quantity'],
                "description" => $product['description'],
                "parameters" => $product['parameters'],
                "ingredients" => $product['ingredients'],
                "guide" => $product['guide']
            ]);
        }
    }
    $products = collect($request->all());


    return $products->count();
});
Route::post("/add-products2", function (Request $request) {
    $products = Product::all();
    foreach ($products as $product) {
        $images = collect($product['images']);

        if ($images->isNotEmpty()) {
            $product->update([
                "thumbnail" => $images[0],
            ]);
        }
    }


    return $products->count();
});

Route::apiResource("/products", ProductController::class);
Route::apiResource("/addresses", AddressController::class)->middleware('auth:sanctum');
Route::apiResource("/carts", CartController::class)->middleware('auth:sanctum');
Route::apiResource("/orders", OrderController::class)->middleware('auth:sanctum');
Route::apiResource("/hot-deals", HotDealController::class);
Route::apiResource("/flash-deals", FlashDealController::class);
Route::apiResource("/discount-codes", DiscountCodeController::class);
Route::apiResource("/reviews", ReviewController::class)->middleware('auth:sanctum');
Route::get('/categories-children', function (Request $request) {
    $categories = Categories::where("type", "Heath & Beauty")
        ->get()
        ->filter(function ($item) {
            return $item->children->isEmpty();
        });
    return CategoriesResource::collection($categories);
});
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest')
    ->name('login');
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth:sanctum')
    ->name('logout');
Route::get('/user', function () {

    return new UserResource(request()->user());
})
    ->middleware('auth:sanctum')
    ->name('login');

Route::get("/list_cities", function () {
    return CityResource::collection(City::all());
});
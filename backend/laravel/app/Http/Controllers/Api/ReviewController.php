<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ReviewRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\Review;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product_id = 197403;
        $hasPurchased = request()->user()->Orders()->whereHas("products", function ($query) use ($product_id) {
            $query->where('products.id', $product_id);
        })->exists();
        return response()->json([
            "test" => $hasPurchased
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReviewRequest $request)
    {
        $reviewRequest = $request->validated();
        $reviewRequest['user_id'] = Auth::id();
        Review::create($reviewRequest);

        return new ProductResource(Product::find($reviewRequest['product_id']));
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Review $review)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        //
    }
}

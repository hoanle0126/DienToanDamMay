<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\UserResource;
use App\Models\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return request()->user()->cart;
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
    public function store(Request $request)
    {
        $cart = $request->user()->cart;

        $productId = $request->product;
        $quantityToAdd = $request->quantity;

        // Kiểm tra nếu đã có trong pivot table
        $existing = $cart->Products()->where('product_id', $productId)->first();

        if ($existing) {
            $currentQty = $existing->pivot->quantity;
            $cart->Products()->updateExistingPivot($productId, [
                'quantity' => $currentQty + $quantityToAdd
            ]);
        } else {
            $cart->Products()->attach($productId, [
                'quantity' => $quantityToAdd
            ]);
        }

        return new UserResource($request->user());
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }
}

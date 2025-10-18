<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\FlashDealResource;
use App\Http\Resources\ProductResource;
use App\Models\FlashDeal;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FlashDealController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new FlashDealResource(FlashDeal::first());
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
        $flashDeal = FlashDeal::first();
        $flashDeal->update([
            "start_time" => Carbon::parse($request->start_time),
            "end_time" => Carbon::parse($request->end_time)
        ]);
        if (!empty($request->products)) {
            foreach ($request->products as $product) {
                $existing = $flashDeal->Products()->where('product_id', $product['id'])->first();
                if ($existing) {
                    $flashDeal->products()->syncWithoutDetaching($product['id']);
                } else {
                    $flashDeal->products()->attach($product['id']);
                }
            }
        }

        return new FlashDealResource(FlashDeal::first());
    }

    /**
     * Display the specified resource.
     */
    public function show(FlashDeal $flashDeal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FlashDeal $flashDeal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FlashDeal $flashDeal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FlashDeal $flashDeal)
    {
        //
    }
}

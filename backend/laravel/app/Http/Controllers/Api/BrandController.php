<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\BrandResource;
use App\Models\Brand;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return BrandResource::collection(Brand::all());
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
        Brand::create([
            "name" => $request->name,
            "description" => $request->description,
            "thumbnail" => $request->thumbnail,
            "logo" => $request->logo,
            "banner" => $request->banner
        ]);

        return $this->index();
    }

    /**
     * Display the specified resource.
     */
    public function show($brand)
    {
        $brand = Brand::where("url", $brand)->first();
        $products = $brand->products();
        $sort = request()->query("sort");
        $paginate = request()->query("limit");
        switch ($sort) {
            case 'price_asc':
                $products->orderBy("price");
                break;
            case 'price_desc':
                $products->orderByDesc("price");
                break;
            case 'new':
                $products->orderByDesc("created_at");
                break;

            default:
                # code...
                break;
        }
        return [
            "brand" => new BrandResource($brand),
            "products" => $products->paginate($paginate ? $paginate : 40)
        ];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Brand $brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        $brand->update([
            "name" => $request->name,
            "description" => $request->description,
            "thumbnail" => $request->thumbnail,
            "logo" => $request->logo,
            "banner" => $request->banner
        ]);

        return $this->index();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        $brand->delete();

        return $this->index();
    }
}

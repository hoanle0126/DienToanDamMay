<?php

namespace App\Http\Resources;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $this->withoutWrapping();
        return [
            'id' => $this->id,
            "reviews" => $this->reviews,
            "rating" => [
                "value" => collect($this->reviews)->average(function ($item) {
                    return $item->rating;
                }),
                "star_5" => collect($this->reviews)->filter(function ($item) {
                    return $item->rating === 5;
                })->count(),
                "star_4" => collect($this->reviews)->filter(function ($item) {
                    return $item->rating === 4;
                })->count(),
                "star_3" => collect($this->reviews)->filter(function ($item) {
                    return $item->rating === 3;
                })->count(),
                "star_2" => collect($this->reviews)->filter(function ($item) {
                    return $item->rating === 2;
                })->count(),
                "star_1" => collect($this->reviews)->filter(function ($item) {
                    return $item->rating === 1;
                })->count()
            ],
            'name' => $this->name,
            'url' => $this->url,
            'categories' => $this->categories['ancestors'],
            'recommends' => $this->categories['products']->reject(fn($product) => $product->id === $this->id)->take(5)->values(),
            'thumbnail' => $this->images[0],
            "parameters" => $this->parameters ? $this->parameters : ["test" => ""],
            "price" => $this->price,
            "total_price" => $this->price - $this->price * $this->sales / 100,
            "quantity" => $this->quantity,
            "quantity_cart" => $this->pivot ? $this->pivot->quantity : 0,
            "remain" => $this->remain,
            "description" => $this->description,
            "sales" => $this->sales,
            "ingredients" => $this->ingredients,
            "guide" => $this->guide,
            "images" => $this->images,
            "categories_id" => $this->categories_id,
            "brand" => [
                "name" => $this->brand['name'],
                "logo" => $this->brand['logo'],
                "products" => $this->brand['products']->reject(fn($product) => $product->id === $this->id)->take(5)->values(),
            ],
            "brand_id" => $this->brand_id,
            "created_at" => $this->created_at,
            "search_count" => $this->search_count
        ];
    }
}

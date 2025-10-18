<?php

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HotDealTimeResource extends JsonResource
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
            "id" => $this->id,
            "time" => $this->time,
            "products" => $this->products->map(
                function ($product) {
                    return [
                        "product" => new ProductResource($product),
                        "sales" => $product->pivot->sales ?? 0
                    ];
                }
            )
        ];
    }
}

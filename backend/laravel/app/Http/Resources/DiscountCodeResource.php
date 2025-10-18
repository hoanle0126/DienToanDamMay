<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DiscountCodeResource extends JsonResource
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
            "name" => $this->name,
            "code" => $this->code,
            "discount" => $this->discount,
            "products" => collect($this->products)->map(function ($item) {
                return [
                    "id" => $item->id,
                    "name" => $item->name,
                    "price" => $item->price,
                    "thumbnail" => $item->images[0],
                ];
            }),
            "brands" => $this->brands,
            "applyAll" => $this->applyAll === 1 ? true : false
        ];
    }
}

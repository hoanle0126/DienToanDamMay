<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            "brands" => $this->brands,
            "name" => $this->name,
            "product_count" => collect($this->getAllChildProducts())->count(),
            "type" => $this->type,
            "url" => $this->url,
            "ancestors" => $this->ancestors,
            "id" => $this->id,
            "thumbnail" => $this->thumbnail,
            "search_count" => $this->products->sum("search_count"),
            "products" => $this->products->take(2),
            "families" => $this->families,
        ];
    }
}

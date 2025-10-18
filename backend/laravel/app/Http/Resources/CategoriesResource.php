<?php

namespace App\Http\Resources;

use App\Models\Categories;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoriesResource extends JsonResource
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
            "name" => $this->name,
            "url" => $this->url,
            "id" => $this->id,
            "thumbnail" => $this->thumbnail,
            "search_count" => $this->products->sum("search_count"),
            "products" => $this->products->take(2),
            "children" => CategoriesResource::collection($this->children)
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BrandResource extends JsonResource
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
            "url" => $this->url,
            "description" => $this->description,
            "thumbnail" => $this->thumbnail,
            "banner" => $this->banner,
            "logo" => $this->logo,
            "products_count" => $this->products->count()
        ];
    }
}

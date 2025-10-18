<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HotDealResource extends JsonResource
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
            "banners" => $this->banners,
            "url" => $this->url,
            "deal_times" => HotDealTimeResource::collection($this->dates)
        ];
    }
}

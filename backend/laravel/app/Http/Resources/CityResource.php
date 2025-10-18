<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
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
            'name' => $this->name,
            'districts' => collect($this->districts)->map(function ($item) {
                return [
                    'name' => $item->name,
                    'wards' => collect($item->wards)->map(function ($itemChild) {
                        return [
                            "name" => $itemChild->name
                        ];
                    })
                ];
            })
        ];
    }
}

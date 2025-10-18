<?php

namespace App\Http\Resources;

use App\Models\City;
use App\Models\District;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AddressResource extends JsonResource
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
            "phone" => $this->phone,
            "name" => $this->name,
            "street_address" => $this->street_address,
            "default" => $this->default === 1,
            "district" => $this->district,
            "province" => $this->province,
            "ward" => $this->ward,
            "cities" => collect(City::all())->map(function ($item) {
                return [
                    "name" => $item->name
                ];
            }),
            "districts" => City::where("name", $this->province)->first()->districts->select("name"),
            "wards" => District::where("name", $this->district)->first()->wards->select("name")
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "first_name" => $this->first_name,
            "last_name" => $this->last_name,
            "email" => $this->email,
            "birth" => $this->birth,
            "created_at" => $this->created_at,
            "address" => $this->address,
            "orders" => OrderResource::collection($this->orders),
            "cart" => ProductResource::collection($this->cart->products)
        ];
    }
}

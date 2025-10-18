<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "products" => $this->products,
            "payments" => $this->payments,
            "note" => $this->note,
            "voucher" => $this->voucher,
            "address" => $this->address
        ];
    }
}

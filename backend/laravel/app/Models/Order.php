<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        "user_id",
        "payments",
        "note",
        "voucher_id",
        "discount_code_id",
        "address_id"
    ];

    protected $casts = [
        "payments" => "array"
    ];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function DiscountCode()
    {
        return $this->belongsTo(DiscountCode::class);
    }

    public function Address()
    {
        return $this->belongsTo(Address::class);
    }

    public function Products()
    {
        return $this->belongsToMany(Product::class)->withPivot("quantity");
    }
}

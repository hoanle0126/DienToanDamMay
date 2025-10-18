<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        "rating",
        "product_id",
        "user_id",
        "rating",
        "description",
        "images"
    ];

    protected $casts = [
        "images" => "array"
    ];

    public function Products()
    {
        return $this->belongsTo(Product::class);
    }
}

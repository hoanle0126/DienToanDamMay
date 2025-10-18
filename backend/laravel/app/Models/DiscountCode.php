<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DiscountCode extends Model
{
    protected $fillable = [
        "name",
        "discount",
        "code",
        "applyAll"
    ];

    public function Products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function Brands()
    {
        return $this->belongsToMany(Brand::class);
    }
}

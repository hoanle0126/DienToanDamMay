<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = [
        "name",
        "description",
        "thumbnail",
        "banner",
        "logo",
        "url"
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function DiscountCode()
    {
        return $this->belongsToMany(DiscountCode::class);
    }
}

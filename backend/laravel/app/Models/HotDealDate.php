<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HotDealDate extends Model
{
    protected $fillable = [
        "hot_deal_id",
        "time"
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot("sales");
    }
}

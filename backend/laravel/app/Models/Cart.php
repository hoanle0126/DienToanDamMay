<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
        "user_id"
    ];

    public function Products()
    {
        return $this->belongsToMany(Product::class)->withPivot("quantity")->withTimestamps();
    }

    public function Users()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "name",
        "code_name",
        "division_type",
        "phone_code"
    ];

    public function districts()
    {
        return $this->hasMany(District::class)->with("wards");
    }
}

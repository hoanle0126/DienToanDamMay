<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ward extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "name",
        "code_name",
        "division_type",
        "district_id",
    ];

    public function districts()
    {
        return $this->belongsTo(Ward::class);
    }
}

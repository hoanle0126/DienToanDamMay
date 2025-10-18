<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Str;

class Categories extends Model
{
    protected $fillable = [
        "name",
        "thumbnail",
        "type",
        "parent_id",
        "url"
    ];

    public function getBrandsAttribute()
    {
        $ids = collect($this->products)->map(function ($item) {
            return $item->brand;
        });

        foreach ($this->children as $child) {
            $ids = $ids->merge($child->getBrandsAttribute());
        }

        return $ids
            ->filter() // loại bỏ null
            ->groupBy('id') // nhóm theo id brand
            ->sortByDesc(function ($group) {
                return $group->count();
            })
            ->map(function ($group) {
                return $group->first(); // trả về đối tượng brand (không lặp)
            })
            ->values(); // reset lại key
    }

    public function getAncestorsAttribute()
    {
        $ancestors = [];
        $ancestors[] = [
            "id" => $this->id,
            "name" => $this->name,
            "url" => $this->url
        ];
        $category = $this;
        while ($category->parent) {
            $category = $category->parent;
            $ancestors[] = [
                "id" => $category->id,
                "name" => $category->name,
                "url" => $category->url
            ];
        }

        return array_reverse($ancestors);
    }

    public function getFamiliesAttribute()
    {
        return [
            "children" => $this->children->map(function ($item) {
                return [
                    "id" => $item->id,
                    "name" => $item->name,
                    "product_count" => collect($item->getAllChildProducts())->count(),
                    "url" => $item->url,
                ];
            }),
            "brother" => $this->parent !== null ? collect(Categories::where("parent_id", $this->parent_id)->get())->map(function ($item) {
                return [
                    "id" => $item->id,
                    "name" => $item->name,
                    "product_count" => collect($item->getAllChildProducts())->count(),
                    "url" => $item->url,
                ];
            }) : $this->children->map(function ($item) {
                return [
                    "id" => $item->id,
                    "name" => $item->name,
                    "product_count" => collect($item->getAllChildProducts())->count(),
                    "url" => $item->url,
                ];
            }),
            "parent" => $this->parent !== null ? [
                "id" => $this->parent->id,
                "name" => $this->parent->name,
                "product_count" => collect($this->parent->getAllChildProducts())->count(),
                "url" => $this->parent->url,
            ] : [
                "id" => $this->id,
                "name" => $this->name,
                "product_count" => collect($this->getAllChildProducts())->count(),
                "url" => $this->url,
            ]
        ];
    }

    public function getAllChildIds()
    {
        $ids = collect([$this->id]);

        foreach ($this->children as $child) {
            $ids = $ids->merge($child->getAllChildIds());
        }

        return $ids;
    }

    public function getAllChildProducts()
    {
        $ids = $this->products;

        foreach ($this->children as $child) {
            $ids = $ids->merge($child->getAllChildProducts());
        }

        return $ids;
    }

    public function parent()
    {
        return $this->belongsTo(Categories::class, "parent_id");
    }

    public function children()
    {
        return $this->hasMany(Categories::class, "parent_id");
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\CategoriesResource;
use App\Http\Resources\CategoryResource;
use App\Models\Categories;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categories::where("name", "Sức Khỏe - Làm Đẹp")->first();
        // return CategoriesResource::collection(Categories::whereNull("parent_id")
        //     ->with("parent")
        //     ->get());
        return CategoriesResource::collection(Categories::where("parent_id",$categories->id)->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return CategoriesResource::collection(Categories::where("type", "Heath & Beauty")->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $parentId = null)
    {
        $category = Categories::create([
            "name" => $request['name'],
            "thumbnail" => $request['thumbnail'],
            "type" => $request['type'],
            "parent_id" => $parentId
        ]);

        // Đệ quy thêm children nếu có
        $children = $request['children'] ?? [];
        if (!empty($children)) {
            foreach ($children as $child) {
                $childRequest = new Request($child); // Tạo request mới cho child
                $this->store($childRequest, $category->id);
            }
        }

        // Chỉ trả về khi là cấp gốc
        if ($parentId === null) {
            return CategoryResource::collection(Categories::all());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($categories)
    {
        $category = Categories::where("url", $categories)->first();
        $productChildren = Product::whereIn("categories_id", $category->getAllChildIds())->paginate(40);

        return response()->json([
            "products" => $productChildren,
            "category" => new CategoryResource($category)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categories $categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $categories)
    {
        $category = Categories::where("id", $categories)->first();
        $category->update([
            "name" => $request['name'],
            "thumbnail" => $request['thumbnail'],
            "type" => $request['type']
        ]);

        // // Đệ quy thêm children nếu có
        $children = $request['children'] ?? [];
        if (!empty($children)) {
            foreach ($children as $child) {
                $childRequest = new Request($child); // Tạo request mới cho child
                $this->update($childRequest, $child['id']);
            }
        }

        // // Chỉ trả về khi là cấp gốc
        if ($category['parent_id'] === null) {
            return $this->index();
        }

        return $this->index();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($categories)
    {
        $category = Categories::where("id", $categories)->first();
        $category->delete();
        $this->deleteChildren($category);

        return $this->index();
    }

    public function deleteChildren($categories)
    {
        foreach ($categories->children as $child) {
            $this->deleteChildren($child);
            $child->delete();
        }
    }
}

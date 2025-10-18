<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $product_id = request()->product_id;
        $hasPurchased = request()->user()->Orders()->whereHas("products", function ($query) use ($product_id) {
            $query->where('products.id', $product_id);
        })->exists();
        return $hasPurchased;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "rating" => "required|integer",
            "description" => "nullable|string",
            "product_id" => "required|exists:products,id",
            "images" => "nullable|array",
            "images.*" => "nullable|url"
        ];
    }

    protected function failedAuthorization()
    {
        abort(403, "Mua đi rồi đánh giá");
    }
}

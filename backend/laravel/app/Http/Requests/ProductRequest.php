<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|unique:products,name',
            'english_name' => 'nullable|string',
            'description' => 'nullable|string',
            'ingredients' => 'nullable|string',
            'guide' => 'nullable|string',
            'parameters' => 'nullable|array',
            'price' => 'nullable|numeric',
            'sales' => 'nullable|numeric',
            'images' => 'nullable|array',
            'images.*' => 'nullable|url',
            'quantity' => 'nullable|numeric',
            'categories_id' => 'required|exists:categories,id',
            'brand_id' => 'required|exists:brands,id',
        ];
    }
}

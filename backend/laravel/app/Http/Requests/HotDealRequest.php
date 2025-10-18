<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HotDealRequest extends FormRequest
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
            'name' => 'required|string',
            'banners' => 'nullable|array',
            'banners.*' => 'url',

            'deal_times' => 'required|array|min:1',
            'deal_times.*.time' => 'required|date',
            'deal_times.*.products' => 'required|array|min:1',
            'deal_times.*.products.*.product.id' => 'required|exists:products,id',
            'deal_times.*.products.*.sales' => 'required|numeric|min:0',
        ];
    }
}

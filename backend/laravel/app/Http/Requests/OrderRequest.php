<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
            "payments" => "required|array",
            "note" => "nullable|string",
            "voucher_id" => "nullable|exists:vouchers,id",
            "discount_code_id" => "nullable|exists:discount_codes,id",
            "address_id" => "required||exists:addresses,id"
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddressRequest extends FormRequest
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
            'district' => 'required|string',
            'ward' => 'required|string',
            'province' => 'required|string',
            'street_address' => 'required|string',
            'phone' => 'required|numeric',
            'default' => 'required|boolean',
        ];
    }

    public function messages(): array
    {
        return [
            "name.required" => "Vui lòng nhập tên người nhận",
            "district.required" => "Vui lòng chọn quận/ huyện",
            "ward.required" => "Vui lòng chọn phường/ xã",
            "province.required" => "Vui lòng chọn tỉnh/ thành phố",
            "street_address" => "Vui lòng nhập tên đường",
        ];
    }
}

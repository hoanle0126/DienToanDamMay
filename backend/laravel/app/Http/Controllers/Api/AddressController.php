<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\AddressRequest;
use App\Http\Resources\AddressResource;
use App\Http\Resources\UserResource;
use App\Models\Address;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Address::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddressRequest $request)
    {
        $address = $request->validated();
        $address['user_id'] = Auth::id();
        if ($address['default']) {
            $all_addresses = request()->user()->Address();
            foreach ($all_addresses as $item) {
                $item->update([
                    "default" => false
                ]);
            }
        }
        Address::create($address);
        return new UserResource(request()->user());
    }

    /**
     * Display the specified resource.
     */
    public function show(Address $address)
    {
        return new AddressResource($address);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Address $address)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AddressRequest $request, Address $address)
    {

        $addressValidate = $request->validated();
        $addressValidate['user_id'] = Auth::id();
        if ($address['default']) {
            $all_addresses = request()->user()->Address();
            foreach ($all_addresses as $item) {
                $item->update([
                    "default" => false
                ]);
            }
        }
        $address->update($addressValidate);
        return new UserResource(request()->user());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Address $address)
    {
        $address->delete();

        return new UserResource(request()->user());
    }
}

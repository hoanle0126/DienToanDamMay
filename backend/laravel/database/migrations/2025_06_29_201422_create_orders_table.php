<?php

use App\Models\Address;
use App\Models\DiscountCode;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use App\Models\Voucher;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->json("payments")->nullable();
            $table->string("note")->nullable();
            $table->foreignIdFor(DiscountCode::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Address::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create("order_product", function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Order::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Product::class)->constrained()->cascadeOnDelete();
            $table->integer("quantity")->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};

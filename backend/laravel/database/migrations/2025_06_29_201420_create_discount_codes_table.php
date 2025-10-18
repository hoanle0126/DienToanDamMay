<?php

use App\Models\Brand;
use App\Models\DiscountCode;
use App\Models\Product;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('discount_codes', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("code");
            $table->float("discount");
            $table->boolean("applyAll");
            $table->timestamps();
        });

        Schema::create('discount_code_product', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(DiscountCode::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Product::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create('brand_discount_code', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(DiscountCode::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Brand::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('discount_codes');
    }
};

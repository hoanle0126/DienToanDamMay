<?php

use App\Models\FlashDeal;
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
        Schema::create('flash_deals', function (Blueprint $table) {
            $table->id();
            $table->time("start_time");
            $table->time("end_time");
            $table->timestamps();
        });

        Schema::create('flash_deal_product', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(FlashDeal::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Product::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('flash_deals');
    }
};

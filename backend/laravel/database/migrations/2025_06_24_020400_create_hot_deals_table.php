<?php

use App\Models\HotDeal;
use App\Models\HotDealDate;
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
        Schema::create('hot_deals', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->json("banner")->nullable();
            $table->timestamps();
        });

        Schema::create('hot_deal_dates', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(HotDeal::class)->constrained()->cascadeOnDelete();
            $table->dateTime("time")->nullable();
            $table->timestamps();
        });

        Schema::create('hot_deal_date_product', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(HotDealDate::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Product::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hot_deals');
    }
};

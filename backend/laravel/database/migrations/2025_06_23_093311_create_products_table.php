<?php

use App\Models\Brand;
use App\Models\Categories;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name")->unique();
            $table->string("english_name");
            $table->string("url");
            $table->longText("description")->nullable();
            $table->integer("quantity")->default(0);
            $table->integer("remain")->default(0);
            $table->integer("search_count")->default(0);
            $table->float("price")->default(0);
            $table->float("sales")->default(0);
            $table->json("images")->nullable();
            $table->json("parameters")->nullable();
            $table->longText("ingredients")->nullable();
            $table->longText("guide")->nullable();
            $table->foreignIdFor(Categories::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Brand::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

<?php

namespace Database\Seeders;

use App\Models\Categories;
use App\Models\FlashDeal;
use App\Models\Type;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $path = database_path('sql/hasaki_clone.sql');
        $sql = File::get($path);
        DB::unprepared($sql);
        $this->command->info('Đã seed dữ liệu từ file my_data.sql!');
    }
}

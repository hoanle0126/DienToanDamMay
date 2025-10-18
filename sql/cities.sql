-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 07, 2025 lúc 09:11 AM
-- Phiên bản máy phục vụ: 11.7.2-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `garden`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `code_name` varchar(255) NOT NULL,
  `division_type` varchar(255) NOT NULL,
  `phone_code` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cities`
--

INSERT INTO `cities` (`id`, `name`, `code_name`, `division_type`, `phone_code`, `created_at`, `updated_at`) VALUES
(1, 'Thành phố Hà Nội', 'thanh_pho_ha_noi', 'tỉnh', 24, '2025-07-07 00:10:45', '2025-07-07 00:10:45'),
(2, 'Tỉnh Hà Giang', 'tinh_ha_giang', 'tỉnh', 219, '2025-07-07 00:10:46', '2025-07-07 00:10:46'),
(4, 'Tỉnh Cao Bằng', 'tinh_cao_bang', 'tỉnh', 206, '2025-07-07 00:10:46', '2025-07-07 00:10:46'),
(6, 'Tỉnh Bắc Kạn', 'tinh_bac_kan', 'tỉnh', 209, '2025-07-07 00:10:46', '2025-07-07 00:10:46'),
(8, 'Tỉnh Tuyên Quang', 'tinh_tuyen_quang', 'tỉnh', 207, '2025-07-07 00:10:47', '2025-07-07 00:10:47'),
(10, 'Tỉnh Lào Cai', 'tinh_lao_cai', 'tỉnh', 214, '2025-07-07 00:10:47', '2025-07-07 00:10:47'),
(11, 'Tỉnh Điện Biên', 'tinh_dien_bien', 'tỉnh', 215, '2025-07-07 00:10:47', '2025-07-07 00:10:47'),
(12, 'Tỉnh Lai Châu', 'tinh_lai_chau', 'tỉnh', 213, '2025-07-07 00:10:47', '2025-07-07 00:10:47'),
(14, 'Tỉnh Sơn La', 'tinh_son_la', 'tỉnh', 212, '2025-07-07 00:10:48', '2025-07-07 00:10:48'),
(15, 'Tỉnh Yên Bái', 'tinh_yen_bai', 'tỉnh', 216, '2025-07-07 00:10:48', '2025-07-07 00:10:48'),
(17, 'Tỉnh Hoà Bình', 'tinh_hoa_binh', 'tỉnh', 218, '2025-07-07 00:10:48', '2025-07-07 00:10:48'),
(19, 'Tỉnh Thái Nguyên', 'tinh_thai_nguyen', 'tỉnh', 208, '2025-07-07 00:10:48', '2025-07-07 00:10:48'),
(20, 'Tỉnh Lạng Sơn', 'tinh_lang_son', 'tỉnh', 205, '2025-07-07 00:10:49', '2025-07-07 00:10:49'),
(22, 'Tỉnh Quảng Ninh', 'tinh_quang_ninh', 'tỉnh', 203, '2025-07-07 00:10:49', '2025-07-07 00:10:49'),
(24, 'Tỉnh Bắc Giang', 'tinh_bac_giang', 'tỉnh', 204, '2025-07-07 00:10:49', '2025-07-07 00:10:49'),
(25, 'Tỉnh Phú Thọ', 'tinh_phu_tho', 'tỉnh', 210, '2025-07-07 00:10:50', '2025-07-07 00:10:50'),
(26, 'Tỉnh Vĩnh Phúc', 'tinh_vinh_phuc', 'tỉnh', 211, '2025-07-07 00:10:50', '2025-07-07 00:10:50'),
(27, 'Tỉnh Bắc Ninh', 'tinh_bac_ninh', 'tỉnh', 222, '2025-07-07 00:10:50', '2025-07-07 00:10:50'),
(30, 'Tỉnh Hải Dương', 'tinh_hai_duong', 'tỉnh', 220, '2025-07-07 00:10:51', '2025-07-07 00:10:51'),
(31, 'Thành phố Hải Phòng', 'thanh_pho_hai_phong', 'tỉnh', 225, '2025-07-07 00:10:51', '2025-07-07 00:10:51'),
(33, 'Tỉnh Hưng Yên', 'tinh_hung_yen', 'tỉnh', 221, '2025-07-07 00:10:51', '2025-07-07 00:10:51'),
(34, 'Tỉnh Thái Bình', 'tinh_thai_binh', 'tỉnh', 227, '2025-07-07 00:10:52', '2025-07-07 00:10:52'),
(35, 'Tỉnh Hà Nam', 'tinh_ha_nam', 'tỉnh', 226, '2025-07-07 00:10:52', '2025-07-07 00:10:52'),
(36, 'Tỉnh Nam Định', 'tinh_nam_dinh', 'tỉnh', 228, '2025-07-07 00:10:52', '2025-07-07 00:10:52'),
(37, 'Tỉnh Ninh Bình', 'tinh_ninh_binh', 'tỉnh', 229, '2025-07-07 00:10:53', '2025-07-07 00:10:53'),
(38, 'Tỉnh Thanh Hóa', 'tinh_thanh_hoa', 'tỉnh', 237, '2025-07-07 00:10:53', '2025-07-07 00:10:53'),
(40, 'Tỉnh Nghệ An', 'tinh_nghe_an', 'tỉnh', 238, '2025-07-07 00:10:54', '2025-07-07 00:10:54'),
(42, 'Tỉnh Hà Tĩnh', 'tinh_ha_tinh', 'tỉnh', 239, '2025-07-07 00:10:54', '2025-07-07 00:10:54'),
(44, 'Tỉnh Quảng Bình', 'tinh_quang_binh', 'tỉnh', 232, '2025-07-07 00:10:55', '2025-07-07 00:10:55'),
(45, 'Tỉnh Quảng Trị', 'tinh_quang_tri', 'tỉnh', 233, '2025-07-07 00:10:55', '2025-07-07 00:10:55'),
(46, 'Thành phố Huế', 'thanh_pho_hue', 'tỉnh', 234, '2025-07-07 00:10:55', '2025-07-07 00:10:55'),
(48, 'Thành phố Đà Nẵng', 'thanh_pho_da_nang', 'tỉnh', 236, '2025-07-07 00:10:56', '2025-07-07 00:10:56'),
(49, 'Tỉnh Quảng Nam', 'tinh_quang_nam', 'tỉnh', 235, '2025-07-07 00:10:56', '2025-07-07 00:10:56'),
(51, 'Tỉnh Quảng Ngãi', 'tinh_quang_ngai', 'tỉnh', 255, '2025-07-07 00:10:56', '2025-07-07 00:10:56'),
(52, 'Tỉnh Bình Định', 'tinh_binh_dinh', 'tỉnh', 256, '2025-07-07 00:10:56', '2025-07-07 00:10:56'),
(54, 'Tỉnh Phú Yên', 'tinh_phu_yen', 'tỉnh', 257, '2025-07-07 00:10:57', '2025-07-07 00:10:57'),
(56, 'Tỉnh Khánh Hòa', 'tinh_khanh_hoa', 'tỉnh', 258, '2025-07-07 00:10:57', '2025-07-07 00:10:57'),
(58, 'Tỉnh Ninh Thuận', 'tinh_ninh_thuan', 'tỉnh', 259, '2025-07-07 00:10:57', '2025-07-07 00:10:57'),
(60, 'Tỉnh Bình Thuận', 'tinh_binh_thuan', 'tỉnh', 252, '2025-07-07 00:10:57', '2025-07-07 00:10:57'),
(62, 'Tỉnh Kon Tum', 'tinh_kon_tum', 'tỉnh', 260, '2025-07-07 00:10:57', '2025-07-07 00:10:57'),
(64, 'Tỉnh Gia Lai', 'tinh_gia_lai', 'tỉnh', 269, '2025-07-07 00:10:58', '2025-07-07 00:10:58'),
(66, 'Tỉnh Đắk Lắk', 'tinh_dak_lak', 'tỉnh', 262, '2025-07-07 00:10:58', '2025-07-07 00:10:58'),
(67, 'Tỉnh Đắk Nông', 'tinh_dak_nong', 'tỉnh', 261, '2025-07-07 00:10:58', '2025-07-07 00:10:58'),
(68, 'Tỉnh Lâm Đồng', 'tinh_lam_dong', 'tỉnh', 263, '2025-07-07 00:10:59', '2025-07-07 00:10:59'),
(70, 'Tỉnh Bình Phước', 'tinh_binh_phuoc', 'tỉnh', 271, '2025-07-07 00:10:59', '2025-07-07 00:10:59'),
(72, 'Tỉnh Tây Ninh', 'tinh_tay_ninh', 'tỉnh', 276, '2025-07-07 00:10:59', '2025-07-07 00:10:59'),
(74, 'Tỉnh Bình Dương', 'tinh_binh_duong', 'tỉnh', 274, '2025-07-07 00:10:59', '2025-07-07 00:10:59'),
(75, 'Tỉnh Đồng Nai', 'tinh_dong_nai', 'tỉnh', 251, '2025-07-07 00:10:59', '2025-07-07 00:10:59'),
(77, 'Tỉnh Bà Rịa - Vũng Tàu', 'tinh_ba_ria_vung_tau', 'tỉnh', 254, '2025-07-07 00:11:00', '2025-07-07 00:11:00'),
(79, 'Thành phố Hồ Chí Minh', 'thanh_pho_ho_chi_minh', 'tỉnh', 28, '2025-07-07 00:11:00', '2025-07-07 00:11:00'),
(80, 'Tỉnh Long An', 'tinh_long_an', 'tỉnh', 272, '2025-07-07 00:11:00', '2025-07-07 00:11:00'),
(82, 'Tỉnh Tiền Giang', 'tinh_tien_giang', 'tỉnh', 273, '2025-07-07 00:11:01', '2025-07-07 00:11:01'),
(83, 'Tỉnh Bến Tre', 'tinh_ben_tre', 'tỉnh', 275, '2025-07-07 00:11:01', '2025-07-07 00:11:01'),
(84, 'Tỉnh Trà Vinh', 'tinh_tra_vinh', 'tỉnh', 294, '2025-07-07 00:11:01', '2025-07-07 00:11:01'),
(86, 'Tỉnh Vĩnh Long', 'tinh_vinh_long', 'tỉnh', 270, '2025-07-07 00:11:01', '2025-07-07 00:11:01'),
(87, 'Tỉnh Đồng Tháp', 'tinh_dong_thap', 'tỉnh', 277, '2025-07-07 00:11:01', '2025-07-07 00:11:01'),
(89, 'Tỉnh An Giang', 'tinh_an_giang', 'tỉnh', 296, '2025-07-07 00:11:02', '2025-07-07 00:11:02'),
(91, 'Tỉnh Kiên Giang', 'tinh_kien_giang', 'tỉnh', 297, '2025-07-07 00:11:02', '2025-07-07 00:11:02'),
(92, 'Thành phố Cần Thơ', 'thanh_pho_can_tho', 'tỉnh', 292, '2025-07-07 00:11:02', '2025-07-07 00:11:02'),
(93, 'Tỉnh Hậu Giang', 'tinh_hau_giang', 'tỉnh', 293, '2025-07-07 00:11:03', '2025-07-07 00:11:03'),
(94, 'Tỉnh Sóc Trăng', 'tinh_soc_trang', 'tỉnh', 299, '2025-07-07 00:11:03', '2025-07-07 00:11:03'),
(95, 'Tỉnh Bạc Liêu', 'tinh_bac_lieu', 'tỉnh', 291, '2025-07-07 00:11:03', '2025-07-07 00:11:03'),
(96, 'Tỉnh Cà Mau', 'tinh_ca_mau', 'tỉnh', 290, '2025-07-07 00:11:03', '2025-07-07 00:11:03');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

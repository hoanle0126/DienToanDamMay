import React from "react";

const convertText = (text) => {
    // Bỏ dấu tiếng Việt
    const removeVietnameseTones = (text) => {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D");
    };

    // Chuyển đổi chuỗi
    const sanitized = removeVietnameseTones(text)
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/[^a-z0-9]+/g, "-") // Thay ký tự không hợp lệ bằng dấu -
        .replace(/^-|-$/g, ""); // Xóa dấu - ở đầu hoặc cuối

    return sanitized;
};

export default convertText;

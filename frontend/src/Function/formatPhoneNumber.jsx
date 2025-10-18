import React from "react";

const formatPhoneNumber = (number) => {
  // Chuyển số thành chuỗi và thêm mã quốc gia
  const phoneNumber = number?.toString();

  // Kiểm tra độ dài và định dạng số điện thoại
  if (phoneNumber.length === 9) {
    return `+1 ${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6)}`;
  }

  return null; // Trả về null nếu số không hợp lệ
};

export default formatPhoneNumber;

import { Icon } from "@iconify/react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ClientFooter = () => {
  return (
    <Stack sx={{ backgroundColor: "background.paper" }}>
      <Grid
        container
        sx={{
          paddingX: "120px",
          borderTop: "2px solid black",
          borderColor: "primary.main",
          paddingY: "16px",
        }}
        spacing="32px"
      >
        <Grid size={7}>
          <Stack direction="row" gap="32px">
            {[
              {
                icon: "https://media.hcdn.vn/hsk/icons/icon_footer_1.png",
                name: "Thanh toán khi nhận hàng",
              },
              {
                icon: "https://media.hcdn.vn/hsk/icons/icon_footer_2.png",
                name: "Giao nhanh miễn phí 24H",
              },
              {
                icon: "https://media.hcdn.vn/hsk/icons/icon_footer_3_200x200.png",
                name: "30 Ngày đổi trả miễn phí",
              },
              {
                icon: "https://media.hcdn.vn/hsk/icons/icon_footer_4.png",
                name: "Thương hiệu toàn cầu uy tín",
              },
            ].map((item, index) => (
              <Stack key={index} gap="8px" alignItems="center">
                <img src={item.icon} alt="" className="h-[80px]" />
                <Typography
                  paddingX={"12px"}
                  variant="subtitle1"
                  textAlign="center"
                  color="primary.main"
                >
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid size={5}>
          <Stack direction="row" gap="32px" justifyContent="end">
            <Stack gap="8px" alignItems="center" color="primary.main">
              <Stack direction="row" alignItems="center" gap="8px">
                <Icon
                  icon="solar:question-circle-bold"
                  width="28"
                  height="28"
                />
                <Typography>HOTLINE CSKH</Typography>
              </Stack>
              <Box
                sx={{
                  padding: "8px 40px",
                  borderRadius: "40px",
                  backgroundColor: "primary.main",
                  color: "grey.0",
                }}
              >
                <Typography variant="h4">1800 6324</Typography>
              </Box>
            </Stack>
            <Stack gap="8px" alignItems="center" color="primary.main">
              <Stack direction="row" alignItems="center" gap="8px">
                <Icon
                  icon="solar:question-circle-bold"
                  width="28"
                  height="28"
                />
                <Typography textTransform="uppercase">Tìm chi nhánh</Typography>
              </Stack>
              <Box
                sx={{
                  padding: "8px 40px",
                  borderRadius: "40px",
                  backgroundColor: "primary.main",
                  color: "grey.0",
                }}
              >
                <Typography variant="h4">Hệ thống Hasaki</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        sx={{
          paddingX: "120px",
          paddingY: "16px",
          backgroundColor: "primary.main",
          color: "grey.0",
          gap: "100px",
        }}
      >
        <Stack gap="12px">
          <Typography variant="subtitle2" textTransform="uppercase">
            Hỗ trợ khách hàng
          </Typography>
          <Stack>
            <Typography variant="body2" color="secondary.main">
              Hotline: 1800 6324
            </Typography>
            <Typography variant="body2">
              (miễn phí , 08-22h kể cả T7, CN)
            </Typography>
            <Typography variant="body2">Các câu hỏi thường gặp</Typography>
            <Typography variant="body2">Gửi yêu cầu hỗ trợ</Typography>
            <Typography variant="body2">Hướng dẫn đặt hàng</Typography>
            <Typography variant="body2">Phương thức vận chuyển</Typography>
            <Typography variant="body2">Chính sách đổi trả</Typography>
          </Stack>
        </Stack>
        <Stack gap="12px">
          <Typography variant="subtitle2" textTransform="uppercase">
            Về hasaki.vn
          </Typography>
          <Stack>
            <Typography variant="body2">Giới thiệu Hasaki.vn</Typography>
            <Typography variant="body2">Tuyển Dụng</Typography>
            <Typography variant="body2">Chính sách bảo mật</Typography>
            <Typography variant="body2">Điều khoản sử dụng</Typography>
            <Typography variant="body2">Liên hệ</Typography>
          </Stack>
        </Stack>
        <Stack gap="12px">
          <Typography variant="subtitle2" textTransform="uppercase">
            Hợp tác & Liên kết
          </Typography>
          <Stack>
            <Typography variant="body2">https://hasaki.vn/clinic</Typography>
            <Typography variant="body2">Hasaki cẩm nang</Typography>
            <Stack direction="row" gap="8px" paddingY="12px">
              {[
                "https://media.hcdn.vn/hsk/icons/fb.png",
                "https://media.hcdn.vn/hsk/icons/icon_tiktok.png",
                "https://media.hcdn.vn/hsk/icons/instagram.png",
              ].map((item, index) => (
                <img key={index} src={item} alt="" className="w-[45px]" />
              ))}
            </Stack>
            <Stack>
              <Typography variant="subtitle2" textTransform="uppercase">
                Thanh toán
              </Typography>
              <Stack direction="row" gap="8px" paddingY="12px">
                {[
                  "https://media.hcdn.vn/hsk/icons/mastercard.png",
                  "https://media.hcdn.vn/hsk/icons/visa.png",
                  "https://media.hcdn.vn/hsk/icons/atm.png",
                ].map((item, index) => (
                  <img key={index} src={item} alt="" className="w-[45px]" />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <div className="flex-1"></div>
        <Stack gap="12px">
          <Typography
            variant="subtitle1"
            textTransform="uppercase"
            paddingRight="80px"
          >
            Cập nhật thông tin khuyến mãi
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              border: "1px solid black",
              height: "40px",
              paddingLeft: "16px",
              borderColor: "divider",
              backgroundColor: "background.paper",
              borderRadius: "20px",
              overflow: "hidden",
              color: "text.primary",
            }}
          >
            <input type="text" className="flex-1" placeholder="email của bạn" />
            <Stack
              sx={{
                backgroundColor: "secondary.main",
                height: "100%",
                justifyContent: "center",
                padding: "20px",
                borderRadius: "20px",
                color: "grey.0",
              }}
            >
              Đăng ký
            </Stack>
          </Stack>
          <Stack
            sx={{
              marginTop: "12px",
              gap: "16px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src="https://media.hcdn.vn/hsk/icons/qr_download_app.png"
              className="size-[88px]"
              alt=""
            />
            <Stack gap="16px">
              <img
                src="https://media.hcdn.vn/hsk/icons/dl_apple.png"
                alt=""
                className="h-[32px]"
              />
              <img
                src="https://media.hcdn.vn/hsk/icons/dl_google.png"
                alt=""
                className="h-[32px]"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ClientFooter;

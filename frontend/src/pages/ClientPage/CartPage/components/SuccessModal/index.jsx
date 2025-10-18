import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { MuiTheme } from "@/theme";

const SuccessModal = ({ open }) => {
  const navigate = useNavigate();

  return (
    <Modal open={open}>
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100vh",
          bgcolor: "background.paper",
          p: "40px",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Thank you for your purchase!
        </Typography>
        {/* <SuccessPurchase
          colorMain={MuiTheme().palette.success.main}
          colorDark={MuiTheme().palette.success.dark}
          colorLight={MuiTheme().palette.success.light}
          width={320}
          height={320}
        /> */}
        <Typography variant="h6" fontWeight={400} textAlign="center">
          Thanks for placing order
        </Typography>
        <Typography variant="h6" fontWeight={400} textAlign="center">
          We will send you a notification when it ships.
        </Typography>
        <Typography variant="h6" fontWeight={400} textAlign="center">
          If you have any question or queries then fell to get in contact us.
        </Typography>
        <Typography variant="h6" fontWeight={400} textAlign="center">
          All the best
        </Typography>
        <Button
          startIcon={
            <Icon icon="eva:arrow-ios-back-fill" width="24" height="24" />
          }
          variant="contained"
          size="large"
          color="common"
          sx={{ marginTop: "32px" }}
          onClick={() => navigate("/shop")}
        >
          Continue Shopping
        </Button>
      </Stack>
    </Modal>
  );
};

export default SuccessModal;

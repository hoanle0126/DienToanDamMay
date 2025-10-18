import { Icon } from "@iconify/react";
import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AdminDefaultLayout = ({ title, children, action }) => {

    return (
        <Box
            component="main"
            sx={{
                backgroundColor:"background.paper",
                minHeight:"calc(100vh - 80px)",
                padding:"28px",
                paddingTop:0,
                display:"flex",
                flexDirection:"column",
                gap:"28px",
                width:"100%"
            }}
        >
            <Stack direction={"row"} sx={{ alignItems: "center" }}>
                <Stack gap={"4px"}>
                    <Typography variant="h4" color="text.primary">{title}</Typography>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        separator={
                            <Box
                                className="w-[4px] h-[4px] rounded-full mx-[4px]"
                                sx={{ backgroundColor: "text.disabled" }}
                            />
                        }
                        sx={{
                            "li:not(:last-child)": {
                                marginBottom: 0,
                            },
                        }}
                    >
                        <Link underline="hover" href={""}>
                            <Typography
                                variant="body2"
                                color={"text.secondary"}
                            >
                                {"Home"}
                            </Typography>
                        </Link>
                        <Typography variant="body2" color={"text.disabled"}>
                            {title}
                        </Typography>
                    </Breadcrumbs>
                </Stack>
                <div className="flex-1"></div>
                <Box>{action}</Box>
            </Stack>
            {children}
        </Box>
    );
};

export default AdminDefaultLayout;

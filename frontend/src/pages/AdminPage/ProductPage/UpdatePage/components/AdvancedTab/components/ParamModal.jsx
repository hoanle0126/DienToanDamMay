import { Icon } from "@iconify/react";
import {
    Box,
    Button,
    Collapse,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Modal,
    Popover,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

export const ParamModal = ({ open, onClose, action, paramKey }) => {
    const [param, setParam] = React.useState({
        title: paramKey,
    });

    React.useEffect(() => {
        setParam({ title: paramKey });
    }, [paramKey]);

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800,
                    borderRadius: "20px",
                    bgcolor: "background.paper",
                    boxShadow: "custom.card",
                    p: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Title"
                    value={param.title}
                    onChange={(e) =>
                        setParam({ ...param, title: e.target.value })
                    }
                />
                <Button
                    color="common"
                    variant="contained"
                    size="large"
                    onClick={() => {
                        action(param);
                        setParam({ title: "" });
                        onClose();
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    );
};

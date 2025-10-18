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
import { ParamModal } from "./ParamModal";
import { ElementModal } from "./ElementModal";

export const ShowParam = ({ parameter, setParameter }) => {
    const [open, setOpen] = React.useState("");
    const [openModal, setOpenModal] = React.useState({
        key: "",
        open: false,
    });
    const [updateModal, setUpdateModal] = React.useState({
        key: "",
        open: false,
    });
    const [openElementModal, setOpenElementModal] = React.useState({
        key: "",
        open: false,
        title: "",
        value: ["asdasd", "asd"],
    });
    const [updateElementModal, setUpdateElementModal] = React.useState({
        key: "",
        open: false,
        title: "",
        value: [""],
    });
    const [valueText, setValueText] = React.useState();
    const [focusText, setFocusText] = React.useState("");

    return (
        <Stack component="div" sx={{ gap: "8px" }}>
            {Object.entries(parameter).map(([key, value]) => (
                <React.Fragment key={key}>
                    <Stack direction="row" alignItems="center" gap="12px">
                        <ListItemButton
                            sx={{
                                borderRadius: "12px",
                                backgroundColor: "background.neutral",
                            }}
                            onClick={() => setOpen(open === key ? "" : key)}
                        >
                            <ListItemIcon>
                                <Icon
                                    icon={`eva:arrow-ios-${
                                        open === key ? "down" : "up"
                                    }ward-fill`}
                                    width={24}
                                    height={24}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="body2">
                                        {key}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                        <IconButton
                            onClick={() =>
                                setUpdateModal({
                                    open: true,
                                    key: key,
                                })
                            }
                        >
                            <Icon
                                icon="solar:pen-new-square-broken"
                                width="24"
                                height="24"
                            />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                let obj = { ...parameter };
                                delete obj[key];
                                setParameter(obj);
                            }}
                        >
                            <Icon
                                icon="solar:trash-bin-minimalistic-broken"
                                width="24"
                                height="24"
                            />
                        </IconButton>
                    </Stack>
                    <Collapse in={open === key}>
                        <Stack>
                            {typeof value === "object" &&
                                Object.entries(value).map(
                                    ([childKey, childValue]) => (
                                        <Stack
                                            key={childKey}
                                            direction="row"
                                            sx={{
                                                alignItems: "start",
                                                paddingY: "8px",
                                                paddingLeft: "12px",
                                                gap: "12px",
                                                "&:not(:last-child)": {
                                                    borderBottom: "1px solid ",
                                                    borderColor: "divider",
                                                },
                                            }}
                                        >
                                            {focusText === childKey ? (
                                                <TextField
                                                    variant="standard"
                                                    value={valueText}
                                                    onChange={(e) =>
                                                        setValueText(
                                                            e.target.value
                                                        )
                                                    }
                                                    sx={{
                                                        width: 240,
                                                        boxShadow: "none",
                                                        "& .MuiInput-underline:before":
                                                            {
                                                                borderBottom:
                                                                    "none", // Ẩn đường viền trước khi focus
                                                            },
                                                        "& .MuiInput-underline:after":
                                                            {
                                                                borderBottom:
                                                                    "none", // Ẩn đường viền khi focus
                                                            },
                                                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                                                            {
                                                                borderBottom:
                                                                    "none", // Ẩn khi hover
                                                            },
                                                    }}
                                                />
                                            ) : (
                                                <Typography
                                                    width={240}
                                                    variant="subtitle2"
                                                >
                                                    {childKey}
                                                </Typography>
                                            )}
                                            {focusText === childKey ? (
                                                <TextField
                                                    variant="standard"
                                                    value={valueText}
                                                    onChange={(e) =>
                                                        setValueText(
                                                            e.target.value
                                                        )
                                                    }
                                                    sx={{
                                                        width: 240,
                                                        boxShadow: "none",
                                                        "& .MuiInput-underline:before":
                                                            {
                                                                borderBottom:
                                                                    "none", // Ẩn đường viền trước khi focus
                                                            },
                                                        "& .MuiInput-underline:after":
                                                            {
                                                                borderBottom:
                                                                    "none", // Ẩn đường viền khi focus
                                                            },
                                                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                                                            {
                                                                borderBottom:
                                                                    "none", // Ẩn khi hover
                                                            },
                                                    }}
                                                />
                                            ) : (
                                                <Stack sx={{ flex: 1 }}>
                                                    {childValue.map(
                                                        (
                                                            childValueItem,
                                                            childValueIndex
                                                        ) => (
                                                            <Typography
                                                                variant="body2"
                                                                key={
                                                                    childValueIndex
                                                                }
                                                            >
                                                                {childValueItem}
                                                            </Typography>
                                                        )
                                                    )}
                                                </Stack>
                                            )}
                                            <IconButton
                                                onClick={() => {
                                                    setUpdateElementModal({
                                                        open: true,
                                                        key: key,
                                                        title: childKey,
                                                        value: childValue,
                                                    });
                                                }}
                                            >
                                                <Icon
                                                    icon="solar:pen-new-square-broken"
                                                    width="24"
                                                    height="24"
                                                />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => {
                                                    let obj = { ...parameter };
                                                    delete obj[key][childKey];
                                                    setParameter(obj);
                                                }}
                                            >
                                                <Icon
                                                    icon="solar:trash-bin-minimalistic-broken"
                                                    width="24"
                                                    height="24"
                                                />
                                            </IconButton>
                                        </Stack>
                                    )
                                )}
                            <Button
                                sx={{ marginTop: "8px" }}
                                color="common"
                                onClick={() => {
                                    setOpenElementModal({
                                        key: key,
                                        open: true,
                                        value: [""],
                                        title: "",
                                    });
                                }}
                            >
                                Add new element
                            </Button>
                        </Stack>
                    </Collapse>
                </React.Fragment>
            ))}
            <Button
                variant="outlined"
                color="common"
                size="large"
                onClick={() =>
                    setOpenModal({
                        open: true,
                    })
                }
            >
                Add new parameter
            </Button>
            <ParamModal
                open={openModal.open}
                onClose={() =>
                    setOpenModal({
                        open: false,
                    })
                }
                paramKey={openModal.key}
                action={(param) => {
                    setParameter({ ...parameter, [param.title]: param.value });
                }}
            />
            <ParamModal
                open={updateModal.open}
                onClose={() =>
                    setUpdateModal({
                        open: false,
                    })
                }
                paramKey={updateModal.key}
                action={(param) => {
                    let obj = { ...parameter };
                    let updateObj = {};
                    for (let [k, v] of Object.entries(obj)) {
                        if (k === updateModal.key) {
                            updateObj[param.title] = v;
                        } else {
                            updateObj[k] = v;
                        }
                    }

                    setParameter(updateObj);
                }}
            />
            <ElementModal
                open={openElementModal.open}
                onClose={() =>
                    setOpenElementModal({
                        open: false,
                    })
                }
                elementValue={openElementModal.value}
                elementTitle={openElementModal.title}
                action={(param) => {
                    let obj = parameter[openElementModal.key];
                    obj = { ...obj, [param.title]: param.value };
                    setParameter({
                        ...parameter,
                        [openElementModal.key]: obj,
                    });
                }}
            />
            <ElementModal
                open={updateElementModal.open}
                onClose={() =>
                    setUpdateElementModal({
                        open: false,
                    })
                }
                elementValue={updateElementModal.value}
                elementTitle={updateElementModal.title}
                action={(param) => {
                    // Tạo bản sao của parameter để không thay đổi trực tiếp
                    let obj = { ...parameter };

                    // Lấy object cha dựa trên key từ updateElementModal
                    let parentObj = obj[updateElementModal.key];
                    if (!parentObj) return; // Kiểm tra nếu parentObj không tồn tại

                    // Tạo một object mới để giữ thứ tự
                    let updatedParentObj = {};

                    // Lặp qua các key-value trong parentObj
                    for (let [k, v] of Object.entries(parentObj)) {
                        if (k === updateElementModal.title) {
                            // Thay thế key bằng param.title và giá trị bằng param.value
                            updatedParentObj[param.title] = param.value;
                        } else {
                            // Giữ nguyên các key-value khác
                            updatedParentObj[k] = v;
                        }
                    }

                    // Gán lại updatedParentObj vào obj
                    obj[updateElementModal.key] = updatedParentObj;

                    // Cập nhật state
                    setParameter(obj);
                }}
            />
        </Stack>
    );
};

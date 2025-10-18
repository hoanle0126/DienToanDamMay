import {
    Box,
    Button,
    Divider,
    IconButton,
    MenuItem,
    Select,
    Stack,
} from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import { MuiTheme } from "../../Theme";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

const MenuBar = ({ editor }) => {
    const [textType, setTextType] = React.useState("p");
    const [selectedImage, setSelectedImage] = React.useState("");

    const handleSelectImage = async (e) => {
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setSelectedImage(imgUrl);
        editor.chain().focus().setImage({ src: imgUrl }).run();
    };

    const handleChange = (event) => {
        setTextType(event.target.value);
    };
    if (!editor) {
        return null;
    }

    return (
        <Stack
            direction={"row"}
            sx={{
                backgroundColor: "background.paper",
                padding: "8px",
                gap: "12px",
                alignItems: "center",
            }}
        >
            <Select
                value={textType}
                onChange={handleChange}
                size="small"
                sx={{ width: 120 }}
                color="custom"
            >
                <MenuItem value={"p"}>Paragraph</MenuItem>
                <MenuItem value={1}>Heading 1</MenuItem>
                <MenuItem value={2}>Heading 2</MenuItem>
                <MenuItem value={3}>Heading 3</MenuItem>
                <MenuItem value={4}>Heading 4</MenuItem>
                <MenuItem value={5}>Heading 5</MenuItem>
                <MenuItem value={6}>Heading 6</MenuItem>
            </Select>
            <Divider orientation="vertical" sx={{ height: "24px" }} />
            <Stack direction={"row"} gap={"4px"}>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive("bold") && "background.neutral",
                    }}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    <Icon
                        icon="fa6-solid:bold"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive("italic") && "background.neutral",
                    }}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    <Icon
                        icon="fa6-solid:italic"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive("strike") && "background.neutral",
                    }}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                    <Icon
                        icon="fa6-solid:strikethrough"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
            </Stack>
            <Divider orientation="vertical" sx={{ height: "24px" }} />
            <Stack direction={"row"} gap={"4px"}>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive("bulletList") &&
                            "background.neutral",
                    }}
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                >
                    <Icon
                        icon="fa6-solid:list-ul"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive("orderedList") &&
                            "background.neutral",
                    }}
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                >
                    <Icon
                        icon="fa6-solid:list-ol"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
            </Stack>
            <Divider orientation="vertical" sx={{ height: "24px" }} />
            <Stack direction={"row"} gap={"4px"}>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive({ textAlign: "left" }) &&
                            "background.neutral",
                    }}
                    onClick={() =>
                        editor.chain().focus().setTextAlign("left").run()
                    }
                >
                    <Icon
                        icon="fa6-solid:align-left"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive({ textAlign: "center" }) &&
                            "background.neutral",
                    }}
                    onClick={() =>
                        editor.chain().focus().setTextAlign("center").run()
                    }
                >
                    <Icon
                        icon="fa6-solid:align-center"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive({ textAlign: "right" }) &&
                            "background.neutral",
                    }}
                    onClick={() =>
                        editor.chain().focus().setTextAlign("right").run()
                    }
                >
                    <Icon
                        icon="fa6-solid:align-right"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: "8px",
                        backgroundColor:
                            editor.isActive({ textAlign: "justify" }) &&
                            "background.neutral",
                    }}
                    onClick={() =>
                        editor.chain().focus().setTextAlign("justify").run()
                    }
                >
                    <Icon
                        icon="fa6-solid:align-justify"
                        width="18"
                        height="18"
                        color={MuiTheme().palette.text.primary}
                    />
                </IconButton>
            </Stack>
            <Divider orientation="vertical" sx={{ height: "24px" }} />
            <IconButton component="label" sx={{ borderRadius: "8px" }}>
                <Icon
                    icon="solar:gallery-send-broken"
                    width="20"
                    height="20"
                    color={MuiTheme().palette.text.primary}
                />
                <input
                    className="hidden"
                    type="file"
                    onChange={handleSelectImage}
                />
            </IconButton>
            <Divider orientation="vertical" sx={{ height: "24px" }} />
            <IconButton
                sx={{ borderRadius: "8px" }}
                onClick={() => editor.chain().focus().setHardBreak().run()}
            >
                <Icon
                    icon="tdesign:enter"
                    width="18"
                    height="18"
                    color={MuiTheme().palette.text.primary}
                />
            </IconButton>
        </Stack>
    );
};
export default MenuBar;

import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { Icon } from "@iconify/react";
import {
    Avatar,
    Button,
    ButtonBase,
    Grid,
    Skeleton,
    Stack,
} from "@mui/material";
import React from "react";

const ListImage = ({ images, setImages }) => {
    const [loading, setLoading] = React.useState(false);
    const handleSelectImage = async (e) => {
        setLoading(true);
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setImages([...images, imgUrl]);
        setLoading(false);
    };

    return (
        <Stack gap="20px">
            <Grid container spacing="12px">
                {loading && (
                    <Grid size={2}>
                        <Skeleton
                            variant="rounded"
                            sx={{
                                width: "100%",
                                height: "100%",
                                aspectRatio: "1 / 1",
                                borderRadius: "12px",
                            }}
                        />
                    </Grid>
                )}
                {images?.reverse().map((image, imageIndex) => (
                    <Grid
                        key={imageIndex}
                        size={2}
                        sx={{
                            position: "relative",
                        }}
                    >
                        <Avatar
                            variant="rounded"
                            sx={{
                                width: "100%",
                                height: "100%",
                                aspectRatio: "1 / 1",
                                borderRadius: "12px",
                                border: "1px solid black",
                                borderColor: "divider",
                            }}
                            src={image}
                        />
                        <ButtonBase
                            sx={{
                                position: "absolute",
                                top: "-10px",
                                right: "-10px",
                                backgroundColor: "background.paper",
                                padding: "4px",
                                borderRadius: "50%",
                                border: "1px solid black",
                                borderColor: "divider",
                                "& svg": {
                                    color: "text.disabled",
                                    "&:hover": {
                                        color: "text.secondary",
                                    },
                                },
                            }}
                            onClick={() => {
                                setImages(
                                    images.filter((img) => img !== image)
                                );
                            }}
                        >
                            <Icon
                                icon="solar:gallery-remove-bold"
                                width="16"
                                height="16"
                            />
                        </ButtonBase>
                    </Grid>
                ))}
            </Grid>
            <Button
                variant="outlined"
                color="common"
                component="label"
                tabIndex={-1}
            >
                {" "}
                Add image
                <input
                    type="file"
                    className="hidden"
                    onChange={handleSelectImage}
                />
            </Button>
        </Stack>
    );
};

export default ListImage;

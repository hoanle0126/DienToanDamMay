import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Card,
  IconButton,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ShowParam } from "./components/ShowParam";
import { Icon } from "@iconify/react";
import { MuiTheme } from "@/Theme";
import ListImage from "@/Components/ListImages";
import EditorTiptap from "../../../../../../Components/EditorTiptap";

const AdvancedTab = ({ product, setProduct }) => {
  return (
    <Stack
      sx={{
        paddingTop: "20px",
        gap: "28px",
        "& .MuiInputBase-input.MuiOutlinedInput-input": {
          fontSize: 14,
        },
      }}
    >
      <Card>
        <Stack gap={"20px"}>
          <Typography variant="h6">Advanced</Typography>
          <Stack gap={"20px"}>
            <Typography variant="subtitle2">Images</Typography>
            <ListImage
              images={product.images}
              setImages={(images) => setProduct({ ...product, images: images })}
            />
          </Stack>
        </Stack>
      </Card>
      <Card>
        <Stack gap={"20px"}>
          <Typography variant="h6">Parameters</Typography>
          <ShowParam
            parameter={product.parameters}
            setParameter={(parameterValue) => {
              setProduct({
                ...product,
                parameters: parameterValue,
              });
            }}
          />
        </Stack>
      </Card>
      <Card>
        <Stack gap={"8px"}>
          <Typography variant="h6">Ingredients</Typography>
          <EditorTiptap
            content={product.ingredients}
            setContent={(contentValue) =>
              setProduct({
                ...product,
                ingredients: contentValue,
              })
            }
          />
          <Typography variant="captiontext" color={"text.disabled"}>
            A product name is required and recommended to be unique.
          </Typography>
        </Stack>
      </Card>
      <Card>
        <Stack gap={"8px"}>
          <Typography variant="h6">Guide</Typography>
          <EditorTiptap
            content={product.guide}
            setContent={(contentValue) =>
              setProduct({
                ...product,
                guide: contentValue,
              })
            }
          />
          <Typography variant="captiontext" color={"text.disabled"}>
            A product name is required and recommended to be unique.
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
};

export default AdvancedTab;

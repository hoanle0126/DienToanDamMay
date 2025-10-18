import { typography } from "@/Theme/elements/typography";
import { Box } from "@mui/material";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Highlight from "@tiptap/extension-highlight";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";
import {
    EditorContent,
    EditorProvider,
    Extension,
    useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./menuBar";
import HardBreak from "@tiptap/extension-hard-break";
import Image from "@tiptap/extension-image";
import { MuiTheme } from "@/Theme";
import GlobalStyle from "../GlobalStyle";

const EditorTiptap = ({ content, setContent }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Highlight,
            BulletList,
            ListItem,
            OrderedList,
            HardBreak.configure({
                keepMarks: true,
                keepAttributes: true,
            }),
            Image,
        ],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
    });

    return (
        <GlobalStyle>
            <Box
                sx={{
                    backgroundColor: "background.neutral",
                    border: "1px solid",
                    borderRadius: "12px",
                    borderColor: "divider",
                    overflow: "hidden",
                    br: {
                        content: "''",
                        display: "block",
                        height: "12px",
                    },
                    img: {
                        margin: "12px",
                    },
                    ".tiptap": {
                        borderTop: "1px solid black",
                        padding: "8px",
                        borderColor: "divider",
                        minHeight: "300px",
                        "&:first-child": {
                            marginTop: 0,
                        },
                        "&:focus": {
                            outline: "none",
                        },
                    },
                }}
            >
                <MenuBar editor={editor} />
                <EditorContent editor={editor} />
            </Box>
        </GlobalStyle>
    );
};

export default EditorTiptap;

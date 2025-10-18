import { Icon } from "@iconify/react";
import {
    Button,
    ButtonBase,
    InputAdornment,
    Stack,
    Typography,
} from "@mui/material";
import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarFilterButton,
    GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import React from "react";

const DataGridToolbar = ({ setFilterButtonEl, rowSelectionModel }) => {
    return (
        <GridToolbarContainer
            sx={{
                padding: "12px",
                "& .MuiInputBase-root": {
                    borderRadius: "12px",
                    "& .MuiInputBase-inputTypeSearch:focus": {
                        boxShadow: "none",
                    },
                },
            }}
        >
            <GridToolbarQuickFilter
                quickFilterParser={(searchInput) =>
                    searchInput
                        .split(",")
                        .map((value) => value.trim())
                        .filter((value) => value !== "")
                }
                variant="outlined"
                color="custom"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Icon
                                icon="eva:search-fill"
                                width={24}
                                height={24}
                            />
                        </InputAdornment>
                    ),
                }}
            />
            <div className="flex-1" />
            {rowSelectionModel.length > 0 && (
                <Button
                    color="error"
                    sx={{
                        gap: "4px",
                    }}
                >
                    <Icon
                        icon="solar:trash-bin-trash-bold"
                        width={20}
                        height={20}
                    />
                    <Typography variant="subtitle2">Delete</Typography>
                    <Typography variant="subtitle2">
                        ({rowSelectionModel.length})
                    </Typography>
                </Button>
            )}
            <GridToolbarColumnsButton
                slotProps={{
                    button: {
                        color: "common",
                        startIcon: <Icon icon="solar:eye-bold" />,
                    }
                }}
            />
            <GridToolbarFilterButton
                slotProps={{
                    button: {
                        color: "common",
                        startIcon: <Icon icon="solar:filter-bold" />,
                    },
                }}
                ref={setFilterButtonEl}
            />
            <GridToolbarExport 
                slotProps={{
                    button: {
                        color: "inherit",
                        startIcon: <Icon icon="solar:export-bold" width={20} height={20}/>,
                    },
                }}/>
        </GridToolbarContainer>
    );
};

export default DataGridToolbar;

import AdminDefaultLayout from "@/layouts/AdminLayout/DefaultLayout";
import { Grid, Stack, TextField } from "@mui/material";
import React from "react";
import ProductSoldCard from "./ProductSoldCard";
import TotalBalanceCard from "./TotalBalanceCard";
import SalesProfitCard from "./SalesProfitCard";
import SaleByGenderCard from "./SaleByGenderCard";
import YearlySalesCard from "./YearlySalesCard";

const DashboardPage = () => {
  return (
    <AdminDefaultLayout title={"Dashboard"}>
      <Grid container spacing={3}>
        {[<ProductSoldCard />, <TotalBalanceCard />, <SalesProfitCard />].map(
          (it) => (
            <Grid size={4} key={it}>
              {it}
            </Grid>
          )
        )}
        <Grid size={4}>
          <SaleByGenderCard />
        </Grid>
        <Grid size={8}>
          <YearlySalesCard />
        </Grid>
      </Grid>
    </AdminDefaultLayout>
  );
};

export default DashboardPage;

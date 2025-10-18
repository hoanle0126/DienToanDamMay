export function formatCurrency(amount) {
    const validAmount = isNaN(amount) || amount == null ? 0 : amount;
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(validAmount);
}

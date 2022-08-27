import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Currency = "usd" | "eur";

interface CurrencyState {
  value: Currency;
}

const initialState: CurrencyState = {
  value: "usd",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;

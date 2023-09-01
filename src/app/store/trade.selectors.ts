import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TradeState, TradiesState } from './trade.reducer';


export const selectTradeState = createFeatureSelector<TradeState>('trades');
export const selectTradiesState = createFeatureSelector<TradiesState>('tradies');

export const selectTrades = createSelector(
    selectTradeState,
    state => state.trades
);

export const selectLoading = createSelector(
    selectTradeState,
    state => state.loading
);

export const selectError = createSelector(
    selectTradeState,
    state => state.error
);

export const selectTradies = createSelector(
    selectTradiesState,
    state => state.tradies
);

export const selectTradiesLoading = createSelector(
    selectTradiesState,
    state => state.loading
);

export const selectTradiesError = createSelector(
    selectTradiesState,
    state => state.error
);
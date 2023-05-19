export const selectIsAuth = state => state.auth.isAuth;
export const selectorIsLoggedIn = state => state.auth.isLoggedIn;
export const selectorIsRefreshing = state => state.auth.isRefreshing;
export const selectorUserName = state => state.auth.user.name;
export const selectToken = state => state.auth.token;

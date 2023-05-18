export const selectIsAuth = state => state.auth.isAuth;
// export const selectIsAuth = state => Boolean(state.auth.idToken);
export const selectorIsLoggedIn = state => state.user.isLoggedIn;
export const selectorIsRefreshing = state => state.user.isRefreshing;

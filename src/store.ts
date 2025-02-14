import { Action, configureStore,ThunkAction } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice'
import usersReducer from './features/users/usersSlice'
import authReducer from './features/auth/authSlice'



export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        auth:authReducer
    },
})

export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown,Action>

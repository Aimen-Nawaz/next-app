import { AppDispatch, RootState } from '@/lib/store'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch as unknown as () => AppDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
import { ReduxState } from "../../store"

export const selectCount = (state: ReduxState) => state.counter.value

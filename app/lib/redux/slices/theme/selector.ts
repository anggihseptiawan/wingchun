import { ReduxState } from "../../store"

export const selectTheme = (state: ReduxState) => state.theme.value

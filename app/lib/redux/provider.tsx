"use client"

import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import { persistStore } from "redux-persist"

persistStore(store)

export const Provider = (props: React.PropsWithChildren) => {
  return <ReduxProvider store={store}>{props.children}</ReduxProvider>
}

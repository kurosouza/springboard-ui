import App from 'next/app'
import { Provider } from 'mobx-react'
import { Grommet, grommet as grommetTheme } from 'grommet'

import { useStore } from '../store'

export default class MyApp extends App {


  render() {

    // let theme = { ...grommetTheme, global: { colors: { 'palette-1': '#CDC6D5'}}};

    // grommetTheme.global.colors = { ...grommetTheme.global.colors, 'palette-1': '#CDC6D5' }

    const { Component, pageProps } = this.props
    const store = useStore(pageProps.initialState)
    return (
      <Provider store={store}>
        <Grommet theme={grommetTheme}>
          <Component {...pageProps} />
        </Grommet>
      </Provider>
    )

  }
}
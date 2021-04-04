import App from 'next/app'
import { Grommet, grommet as grommetTheme } from 'grommet'

export default class MyApp extends App {

  render() {

  // let theme = { ...grommetTheme, global: { colors: { 'palette-1': '#CDC6D5'}}};

  // grommetTheme.global.colors = { ...grommetTheme.global.colors, 'palette-1': '#CDC6D5' }

    const { Component, pageProps } = this.props
    return (
      <Grommet theme={grommetTheme}>
        <Component {...pageProps} />
      </Grommet>
    )
  }
}

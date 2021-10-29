import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './index.css';

// Your top level component
import Shell from './shell/Shell';

// Export your top level component as JSX (for static rendering)
export default Shell

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    )
  }

  // Render!
  render(Shell)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./shell/Shell', () => {
      render(Shell)
    })
  }
}

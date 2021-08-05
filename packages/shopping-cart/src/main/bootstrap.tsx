import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

console.log('teste')

// Mount function to start up the app
const mount = (el: Element): void => {
  ReactDOM.render(<App />, el)
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('shopping-cart')

  if (devRoot) {
    mount(devRoot)
  }
}

// We are running through container
// and we should export the mount function
export { mount }

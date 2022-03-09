import { render } from '@testing-library/react'
import MainApp from './App'
import ReactDOM from 'react-dom'

it('renders without crashes', () => {
  const div = document.createElement('div')
  render(<MainApp />, div)
  ReactDOM.unmountComponentAtNode(div)
})

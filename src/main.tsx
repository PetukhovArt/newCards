import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from '@/app/App.tsx'
import { store } from '@/app/store.ts'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)

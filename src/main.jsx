import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {store,persistor} from './redux/store.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </QueryClientProvider>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)

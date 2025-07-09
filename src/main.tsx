import './style/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ReactQueryProvider from './ReactQueryProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ReactQueryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactQueryProvider>
);

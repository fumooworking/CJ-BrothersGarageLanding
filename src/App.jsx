import Layout from './layout/Layout'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Toaster expand={true} richColors position="bottom-right"  />
      <Layout />
    </>
  )
}

export default App

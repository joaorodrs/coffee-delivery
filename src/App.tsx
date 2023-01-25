import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'

import Home from './pages/Home'
import Checkout from './pages/Checkout'
import SucceedOrder from './pages/SucceedOrder'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/succeed" element={<SucceedOrder />} />
      </Route>
    </Routes>
  )
}

export default App
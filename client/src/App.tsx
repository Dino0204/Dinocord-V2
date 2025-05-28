import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./views/signin/ui"
import Channel from "./views/channel/ui"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
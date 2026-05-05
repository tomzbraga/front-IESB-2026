import { Route, Routes } from 'react-router';

function App() {

  return (

    <Routes>

      <Route element={<Layout />}>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/settings"   element={<Settings />} />
        <Route path="/*"          element={<Erro404 />} />
      </Route>
        
        <Route path="/login"      element={<Login />} />
    
    </Routes>

  )

}

export default App;
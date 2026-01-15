
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import CreateProductForm from './forms/CreateProductForm'
import { Provider } from 'react-redux'
import store from './features/store/store'
import DetailPage from './components/DetailPage'
import ProductTable from './components/ProductTable'
import EditProduct from './components/EditProduct'



const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product />} />
      <Route path='/create-product' element={<CreateProductForm />} />
      <Route path='/product/:id' element={<DetailPage />} />
      <Route path='/product-table' element={<ProductTable />} />
      <Route path='/edit-product/:id' element={<EditProduct />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
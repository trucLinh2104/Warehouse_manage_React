
import { useRoutes } from 'react-router-dom';
import Header from './component/header.jsx';
import Navigation from './component/navigation.jsx';
import routes from './router/router.jsx';
import './App.css'
import './assets/css/main.css'

function App() {

    const routing = useRoutes(routes);
  return (

    <>
        <Header></Header>
        <main>
            <Navigation></Navigation>
            {routing}
        </main>

    </>
  )
}

export default App

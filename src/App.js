import './assets/styles/body.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import { AuthContext } from './context/authContex';
import Header from './componentes/header/header';
import Presentacion from './componentes/presentacion/presentacion';
import Footer from './componentes/footer/footer';
import Secundaria from './componentes/secundaria/secundaria';
import Universitario from './componentes/universitario/universitario';
import Login from './componentes/login/login';
import DetalleCarrera from './componentes/detalleCarrera/detalleCarrera'
import Registro from './componentes/Registro/registro'
function App() {



  return (
    <AuthContext>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/universitario">
              <Presentacion
                title1="Realiza voluntariados"
                title2="mientras estudias"
                to="/carrerasUni"
              />
            </Route>
            <Route path="/carreras">
              <Presentacion
                title1="Realiza voluntariados"
                title2="mientras estudias"
                to="/carrerasSecu"
              />
            </Route>
            <Route path="/carrerasSecu">
              <Secundaria
                title1="Realiza voluntariados"
                title2="mientras estudias"
              />
            </Route>
            <Route path="/carrerasUni">
              <Universitario
                title1="Realiza voluntariadoss"
                title2="mientras estudias"
              />
            </Route>
            <Route path="/detalleCarrera">
              <DetalleCarrera />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

              <Route path="/universitario">
                <Presentacion title1="Realiza voluntariados" title2="mientras estudias" to="/carrerasUni"/>
              </Route>
              <Route path="/carreras">
                <Presentacion title1="Realiza voluntariados" title2="mientras estudias" to="/carrerasSecu"/>
              </Route>
              <Route path="/carrerasSecu">
                <Secundaria title1="Realiza voluntariados" title2="mientras estudias"/>
              </Route>
              <Route path="/carrerasUni">
                <Universitario title1="Realiza voluntariadoss" title2="mientras estudias"/>
              </Route>
              <Route path="/detalleCarrera">
                <DetalleCarrera />
              </Route>
              <Route path="/registro">
                <Registro/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
    

              <Route path="/" >
                <Presentacion title1="Dale sentido a tu futura" title2="vida profesional" to="/carrerasSecu"/>
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </AuthContext>
  )
}

export default App

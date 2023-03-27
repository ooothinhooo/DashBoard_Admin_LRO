import { Switch, Route, Redirect } from 'react-router-dom';
import { Sidebar, Footer } from "./components/DefaultLayout";
import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import Tables from "pages/Tables";
import Maps from "pages/Maps";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

import { Fragment, useContext } from "react";
import { AccountManagement } from "pages/index.js";
import { ArticleManagement } from "pages/index.js";
import { DocumentManagement } from "pages/index.js";
import { Login } from "pages/index.js";
import { ProductContext } from "contexts/ProductContextProvider.js";
import ViewProfileUser from "components/ViewProfileUser.jsx";
import ViewBaiViet from "pages/ViewBaiViet.jsx";
import ViewTaiLieu from "pages/ViewTaiLieu.jsx";
function App() {
  const { user } = useContext(ProductContext);
  console.log(user);
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      {user && user.access == "admin" ? (
        <>
          <div>
            <Sidebar />
            <div className="md:ml-64">
              <Switch>
                <Route exact path="/" component={Dashboard} />

                <Route exact path="/view/tailieu/:id" component={ViewTaiLieu} />
                <Route exact path="/view/baiviet/:id" component={ViewBaiViet} />
                <Route exact path="/u/:id" component={ViewProfileUser} />
                <Route exact path="/acc" component={AccountManagement} />
                <Route exact path="/arts" component={ArticleManagement} />
                <Route exact path="/docs" component={DocumentManagement} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/tables" component={Tables} />
                <Route exact path="/maps" component={Maps} />
                <Redirect from="*" to="/" />
              </Switch>
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect from="*" to="/login" />
          </Switch>
        </>
      )}
    </>
  );
}

export default App;

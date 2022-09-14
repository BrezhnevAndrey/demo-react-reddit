import React, { useEffect, useState } from "react";
import "./main.global.less";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mainReduser, setToken } from "./store/reducer";
import thunk from "redux-thunk";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Post } from "./shared/Post";
import { ErrorPage } from "./shared/ErrorPage";

export const store = createStore(
  mainReduser,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const token =
      window.__token__ && window.__token__ !== "undefined"
        ? window.__token__
        : localStorage.getItem("token");
    store.dispatch(setToken(token));
    // localStorage.clear()
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <Routes>
            <Route
              path={"/posts"}
              element={
                <Layout>
                  <Outlet />
                  <Header />
                  <Content>
                    <CardsList />
                  </Content>
                </Layout>
              }
            >
              <Route path="/posts/:id" element={<Post />} />
            </Route>
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/" element={<Navigate to="/posts" replace />} />
            <Route path="/auth" element={<Navigate to="/posts" replace />} />
            <Route path="/*" element={<Navigate to="/error" replace />} />
          </Routes>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

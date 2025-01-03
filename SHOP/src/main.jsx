import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App.jsx";
import store from "./store.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </QueryClientProvider>
);

import { restaurants } from "./data";
import Layout from "./components/Layout/Layout";
import TabsSection from "./components/TabsSection/TabsSection";
import AuthorizationContextProvider from "./components/AuthorizationContextProvider/AuthorizationContextProvider";
import ThemeContextProvider from "./components/ThemeContextProvider/ThemeContextProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import TabsSectionReceiver from "./components/TabsSection/TabsSectionReceiver";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthorizationContextProvider>
          <Layout>
            <TabsSectionReceiver />
          </Layout>
        </AuthorizationContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}

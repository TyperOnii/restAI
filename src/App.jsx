import { restaurants } from "./data";
import Layout from "./components/Layout/Layout";
import TabsSection from "./components/TabsSection/TabsSection";
import ThemeContextProvider from "./components/ThemeContextProvider/ThemeContextProvider";
import AuthorizationContextProvider from "./components/AuthorizationContextProvider/AuthorizationContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <AuthorizationContextProvider>
        <Layout>
          <TabsSection rests={restaurants} />
        </Layout>
      </AuthorizationContextProvider>
    </ThemeContextProvider>
  );
}

export default App;

import { useState } from "react";
import { restaurants } from "./data";
import Header from "./components/Header/Header";
import "./App.css";
import Layout from "./components/Layout/Layout";
import TabsSection from "./components/TabsSection/TabsSection";

function App() {
  return (
    <>
      <Layout>
        <TabsSection rests={restaurants} />
      </Layout>
    </>
  );
}

export default App;

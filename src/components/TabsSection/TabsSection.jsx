import { useState } from "react";
import Tab from "../Tab/Tab";
import classes from "./TabsSection.module.css";
import ActiveTab from "../ActiveTab/ActiveTab";

export default function TabsSection({ rests }) {
  const [currentTab, setCurrentTab] = useState(rests[0]);
  const changeTabHandler = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <section className={classes.section}>
      <div className={[classes.inner, "container"].join(" ")}>
        <div className={classes.tabs}>
          {rests.map((rest) => (
            <Tab
              key={rest.id}
              rest={rest}
              changeTabHandler={changeTabHandler}
            />
          ))}
        </div>
        <div className={classes.activeTab}>
          <ActiveTab rest={currentTab} />
        </div>
      </div>
    </section>
  );
}

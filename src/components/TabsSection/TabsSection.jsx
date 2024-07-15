import { useState } from "react";
import Tab from "../Tab/Tab";
import classes from "./TabsSection.module.css";
import Restaurant from "../Restaurant/Restaurant";

export default function TabsSection({ rests }) {
  const [activeRest, setActiveRest] = useState(rests[0]);
  const changeTabHandler = (id) => {
    setActiveRest(rests.find((rest) => rest.id === id));
  };

  return (
    <section className={classes.section}>
      <div className={[classes.inner, "container"].join(" ")}>
        <div className={classes.tabs}>
          {rests.map((rest) => (
            <Tab
              key={rest.id}
              id={rest.id}
              text={rest.name}
              changeTabHandler={changeTabHandler}
            />
          ))}
        </div>
        <div className={classes.activeTab}>
          <Restaurant rest={activeRest} />
        </div>
      </div>
    </section>
  );
}

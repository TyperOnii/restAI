import { useState } from "react";
import classes from "./TabsSection.module.css";
import TabReceiver from "../Tab/TabReceiver";
import RestaurantReceiver from "../Restaurant/RestaurantReceiver";
import Tabs from "../Tabs/Tabs";

export default function TabsSection({ restsIds }) {
  const [activeRestId, setActiveRestId] = useState(restsIds[0]);
  const activeRestChanger = (id) => setActiveRestId(id);

  return (
    <section className={classes.section}>
      <div className={[classes.inner, "container"].join(" ")}>
        <div className={classes.tabs}>
          <Tabs ids={restsIds} changer={activeRestChanger} />
        </div>
        <div className={classes.activeTab}>
          <RestaurantReceiver restId={activeRestId} />
        </div>
      </div>
    </section>
  );
}

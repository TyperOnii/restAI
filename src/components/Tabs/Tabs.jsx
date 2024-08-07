import TabReceiver from "../Tab/TabReceiver";

export default function Tabs({ ids, changer }) {
  return ids.map((id) => <TabReceiver restId={id} restChanger={changer} />);
}

import { List } from "./list"
import { Newbutton } from "./new-button"
export function Sidebar() {
  return (
    <aside className="fixed z-[20] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <List/>
      <Newbutton />
      Sidebar
      </aside>
  )
}

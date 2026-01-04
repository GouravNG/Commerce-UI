import { Button } from "commerce-ui-scn/components/ui/button"
import { Button as Button2, Button3 } from "commerce-ui-mui"
export default function Home() {
  return (
    <>
      <h1 className="bg-blue-500 p-2 m-2 ">Commerce-UI</h1>
      <Button variant={"outline"}>Commerce UI button</Button>
      <Button2 variant="contained">MUI Button</Button2>
      <Button3 />
    </>
  )
}

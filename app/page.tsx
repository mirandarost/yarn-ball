import { RoutingButton } from "./ui/buttons";
import Header from "@/app/ui/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <RoutingButton route='/details'>Get details</RoutingButton>
      </div>
    </main>
  );
}

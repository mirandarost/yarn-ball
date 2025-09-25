import { RoutingButton } from "./ui/buttons";
import Header from "@/app/ui/header";
import SearchForm from "@/app/ui/search-form";

export default function Home() {
    return (
        <main>
            <Header />
            <SearchForm />
            <div>
                {/* <RoutingButton route='/details'>Get details</RoutingButton> */}
            </div>
        </main>
    );
}

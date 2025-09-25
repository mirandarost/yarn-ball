import Header from "@/app/ui/header";

export default function NotFound() {
    return(
        <div>
            <Header />
            <h1 className="text-3xl">Pattern not found</h1>
            <p>Please check the pattern ID and try again.</p>
        </div>
    )
}
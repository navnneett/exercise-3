import { useEffect } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ExampleOne() {

    // The [] maeks sure the useEffect only runs once

    /** 
    * code on pages will run two lines.
    * Once to render what we want and another is to
    * render strict mode to find any common bugs
    */
    useEffect(() => {
        console.log("RUN");
    }, [])
 
    return(
        <>
            <Header>
            <main>
                <h1>Example 2</h1>
            </main>    
            </Header>
        </>
    )
}
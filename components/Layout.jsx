import Head from "next/head"
import Header from './Header'
import Footer from "./Footer"

export default function Layout({children , title}){

    return (
        <>
            <Head>
                <title>{title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}
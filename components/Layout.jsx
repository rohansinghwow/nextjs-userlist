import Head from "next/head"
import Header from './Header'
import Footer from "./Footer"
import { useRouter } from "next/router"

export default function Layout({children , title}){
    const router = useRouter()
    return (
        <>
            <Head>
            <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>{title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            </Head>
            <Header/>
            {router.pathname !== "/" && (
    <button className="ms-5 mt-3 btn btn-info" onClick={() => router.back()}>Back</button>
  )}
            <main className="p-5">
                {children}
            </main>

            <Footer/>
        </>
    )
}
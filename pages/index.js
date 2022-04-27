import Layout from "../components/Layout";
import Link from "next/link";

export default function Home(){
    
    return (
        <Layout title={"Homepage"} >
            
            
            <h1>Mini Project using JSOn Placeholder with NextJS</h1>
            
            <Link href={`/users`}><a className="btn btn-primary ms-2 mb-2">User List</a></Link>
            <Link href={`/dogs`}><a className="btn btn-primary ms-2">Ah Yes,Doggo</a></Link>
            
        </Layout>
    )
}
import axios from "axios"
import Image from "next/image"
import Layout from "../../components/Layout"

export default function SingleDog({singledog}){
    
    return (
        <Layout>
            <Image className='img-container p-2'

                    layout='fixed'
                    src={singledog.message}
                    alt="Random Dog"
                    width={400}
                    height={380}
        />
        </Layout>
    )
    
}

export async function getServerSideProps(context){
    try {
        const {data} = await axios.get(`http://localhost:3000/api/dogs/${context.query.id}`)
        return {
            props : {
                singledog : data
            }
        }    
    } catch (error) {
        
    }
}
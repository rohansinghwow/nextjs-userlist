import axios from 'axios'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Dogs({dogs}){
    const router = useRouter()
    return (
        <Layout>
            <h2>Random Images of Dogs !</h2>
            <h3>Total Dogs : {dogs.length}</h3>
            {dogs.map(item=>{
                
                
                  return (

<Image className='img-container p-2'
role={'button'}
onClick={()=>router.push(`/dogs/${item.id}`)}
                    layout='fixed'
                    src={item.message}
                    alt="Random Dog"
                    width={340}
                    height={360}
        />
                    
                  )
                
                    
            })}
            
        </Layout>
        
    )
}

export async function getServerSideProps(){
        
    try {
        const {data} = await axios.get('http://localhost:3000/api/dogs/')
        return {
            props: {
                dogs : data
            }
        }
    } catch (error) {
        
    }
}
 
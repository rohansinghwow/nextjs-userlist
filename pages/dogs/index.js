import axios from 'axios'
import Layout from '../../components/Layout'
import Image from 'next/image'

export default function Dogs({dogs}){

    return (
        <Layout>
            <h2>Random Images of Dogs !</h2>
            <h3>Total Dogs : {dogs.length}</h3>
            {dogs.map(item=>{
                
                
                  return (

<Image className='img-container p-2'
role={'button'}
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

export async function getServerSideProps(context){
        
    try {
        const {data} = await axios.get('http://localhost:3000/api/')
        return {
            props: {
                dogs : data
            }
        }
    } catch (error) {
        
    }
}
 
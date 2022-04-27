import Loading from '../components/Loading';
import { useState} from 'react';
import '../styles/globals.css'
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart" , (url)=>{
    setLoading(true)
  })
  Router.events.on("routeChangeComplete" , (url)=>{
    setLoading(false)
  })
  return (
    <>
    
      {
        loading ? <Loading/> : <Component {...pageProps} />
      }
      
     
     
      
  
    
    </>
    )
}

export default MyApp

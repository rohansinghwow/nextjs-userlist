export default function Loading (){

    return (
        <>
        <h1  className="loading">Loading...</h1>

        <style jsx>{`
        .loading{
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
        
      `}</style>
        </>
    )
}
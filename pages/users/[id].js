import axios from "axios";
import Layout from "../../components/Layout";


export default function SingleUser({singleUser}){
    console.log(singleUser)
    return (
        <Layout title={"Single User"}>
            <h2>Single User</h2>

            <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> Name</th>
      <th scope="col">Username</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Email</th>
      <th scope="col">Zipcode</th>
      <th scope="col">Street</th>
      
    </tr>
  </thead>
  <tbody>
      
          
          <tr key={singleUser.id}>
          <th scope="row">{singleUser.id}</th>
          <td >{singleUser.name}</td>
          <td >{singleUser.username}</td>
          <td >{singleUser.phone}</td>
          <td >{singleUser.website}</td>
          <td >{singleUser.email}</td>
          <td >{singleUser.address.zipcode}</td>
          <td >{singleUser.address.street}</td>
        </tr>
        
        
      
    
  </tbody>
</table>
        </Layout>
    )
}

export async function getServerSideProps(context){
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        return {
            props:{
                singleUser : data
            }
        }
    } catch (error) {
        console.log(error)
    }
}
import axios from "axios";
import {useState,useEffect} from 'react'
import Layout from "../../components/Layout";
import { useRouter } from "next/router";


export default function Users({ user }) {
  const router = useRouter();
  

  return (
      
    <Layout title={"All Users"}>
      <h2>Number of Users :{user.length}</h2>
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td
                role={"button"}
                onClick={() => router.push(`users/${item.id}`)}
              >
                {item.name}
              </td>
              <td
                role={"button"}
                onClick={() => router.push(`users/${item.id}`)}
              >
                {item.phone}
              </td>
              <td
                role={"button"}
                onClick={() => router.push(`users/${item.id}`)}
              >
                {item.address.city}
              </td>
              <td
                role={"button"}
                onClick={() => router.push(`users/${item.id}`)}
              >
                {item.website}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Layout>
   
  );
}
export async function getStaticProps(context) {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

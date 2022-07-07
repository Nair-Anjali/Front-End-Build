import React, { useEffect, useState } from 'react';
import ListItem from "../ListItem/ListItem";
import CircularProgress from '@mui/material/CircularProgress';


const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const url = "https://dummyjson.com/products"

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setLoader(false)
        setData(json.products)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [])


  return (<>
    <h1>Welcome User</h1>
    {data.length && !loader ?
      <div id="itemContainer">
        <ListItem listItem={data} />
      </div>
      : <CircularProgress />}
  </>)
}

export default Home;
import { useState, useEffect } from "react";
import Card from "./Card";
import "../style/body.css";
import { Link } from "react-router-dom";
import Shimmer1 from "./Shimmer1";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [latestdata, setLastestdata] = useState(null);
  const [randomdata, setRandomdata] = useState(null);
  const [sagar,setSagar]= useState("paneer");
  const [searchdata,setSearchdata] = useState(null);

  useEffect(() => {
    getdata();
  }, []);
  

  async function getdata() {
    const data1 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
    );
    const json1 = await data1.json();
    setLastestdata(json1?.meals);

    const data2 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
    );
    const json2 = await data2.json();
    setRandomdata(json2?.meals);


    // console.log(json1?.meals);
    // console.log(json2?.meals);
  }

  useEffect(()=>{
    getsagar();
  },[sagar])

  async function getsagar(){

    if(searchText)
    {
      const data1 = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="+sagar
      );
      
      const json1 = await data1.json();
      setSearchdata(json1.meals);
    }
    
    // console.log(json1);
    // console.log(searchdata);
    
  }
  
  if(searchdata)
  {
    return (
      <div className="card-list">
            {searchdata.map((data) => {
              return <Link to={"/searched/"+data.idMeal} key={data.idMeal} className="list1"><Card {...data}/></Link>;
            })}
      </div>
    )
  }

  if (!latestdata || !randomdata) return <Shimmer1/>;

  return (
    <div className="body">
      <div className="search">
        <input
          value={searchText}
          placeholder="Search for meal"
          className="input-search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e)=>{
            if(e.keyCode===13)
            setSagar(searchText);
          }}
        />
        <button class="button-37"
        onClick={()=>{
          setSagar(searchText);
        }}>Search</button>
      </div>
      <div className="lower-body">
        <div className="food1">
            <h1>Latest meals</h1>
            <div className="card-list">
            {latestdata.map((data) => {
              return <Link to={"/searched/"+data.idMeal} key={data.idMeal} className="list1"><Card {...data}/></Link>;
            })}
            </div>
        </div>
        <div className="food2">
            <h1>Random meals</h1>
            <div className="card-list">
            {randomdata.map((data) => {
                return <Link to={"/searched/"+data.idMeal} key={data.idMeal} className="list2"><Card {...data}/></Link>;
            })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

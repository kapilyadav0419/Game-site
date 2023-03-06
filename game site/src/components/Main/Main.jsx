import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Item from "../Item/Item";
import "./Main.css"

const Main = ()=> {
    const [oldSchool, setOldSchool] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:1337/api/old-schools?populate=*').then((oldSchool)=> {
            setOldSchool(oldSchool.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/best-sellers?populate=*').then((bestSeller)=> {
            setBestSeller(bestSeller.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
    return (
        <>
            <Header/>
            <section id="games">
                <h3 id="best">Best Sellers</h3>
                {bestSeller.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <h3 id="old">Old School</h3>
                { oldSchool.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
            </section>
        </>
    )
}
export default Main ;
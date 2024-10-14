import axios from "axios";
import React, {useState, useEffect} from "react"
import CardPizza from "../components/CardPizza";

const Home = ()=>{
  const [pizzas, setPizzas] = useState([]);

    const fetchPizzas = async ()=> {
        try {
            const response = await axios.get('http://localhost:5000/api/pizzas');
            setPizzas(response.data)
        }
        catch{

        }

    }
    useEffect(() => {
        fetchPizzas();
    }, []);

    return(
        <main>
         
            <div className="container">
                <div className="row">
                    {pizzas.map((pizza, index) => (
                        <div className="col-12 col-md-4 mb-2" key={index}>
                            <CardPizza
                                id={pizza.id}
                                desc={pizza.desc}
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;
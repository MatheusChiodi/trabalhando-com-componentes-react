import Item from "./components/item";
import Card from "./components/card";

const App = () =>{
    return (
        <>
            <h1>Minha primeira aplicação com React</h1>
            <ul className="list-group">
                <li>
                    <Item>Item 1</Item>
                </li>
                <li>
                    <Item>Item 2</Item>
                </li>
                <li>
                    <Item>Item 3</Item>
                </li>
           </ul>
           <Card />
        </>
    )
}

export default App; 

// export default function App() { return ( <h1>Hello World</h1> ) }
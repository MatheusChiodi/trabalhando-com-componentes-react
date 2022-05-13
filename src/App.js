import Item from "./components/item";

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
        </>
    )
}

export default App; 

// export default function App() { return ( <h1>Hello World</h1> ) }
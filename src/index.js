import React from 'react'; // Obrigatorio
import ReactDOM from 'react-dom/client'; // Obrigatorio
import App from './App'; // Obrigatorio

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // onde sera renderizado 
);

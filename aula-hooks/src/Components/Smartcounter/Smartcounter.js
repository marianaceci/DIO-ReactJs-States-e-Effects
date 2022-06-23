import {useState} from 'react';

function SmartCounter(){
    //retorna um vetor, com uma variavel statefull e uma função amarrada a esta variavel que utiliza este valor
    const [ quantity, upQuantity ] = useState(1);
    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;
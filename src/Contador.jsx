import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }

    function resetar() {
        setContador(0);
    }

    function Menor() {
        if (contador - 1 < 0) {
            alert("Valor negativo!");
        } else {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>Valor atual: {contador}</p>
            <button onClick={aumentar}>+</button>
            <button onClick={Menor}>-</button>
            <button onClick={resetar}>Resetar</button>
        </div>
    );
}

export default Contador;

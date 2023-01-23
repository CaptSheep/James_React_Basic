function Basic_Calculator() {
    function sumNumber() {
        let number1 = +document.getElementById('number1').value
        let number2 = +document.getElementById('number2').value
        return (
            <div>
                {document.getElementById('result').innerHTML = `Ket qua la : ${number1 + number2}` }
            </div>
        )
    }

    function minusNumber(){
        let number1 = +document.getElementById('number1').value
        let number2 = +document.getElementById('number2').value
        return (
            <div>
                {document.getElementById('result').innerHTML = `Ket qua la : ${number1 - number2}` }
            </div>
        )
    }
    function multiNumber(){
        let number1 = +document.getElementById('number1').value
        let number2 = +document.getElementById('number2').value
        return (
            <div>
                {document.getElementById('result').innerHTML = `Ket qua la : ${number1 * number2}` }
            </div>
        )
    }
    function divideNumber(){
        let number1 = +document.getElementById('number1').value
        let number2 = +document.getElementById('number2').value
        return (
            <div>
                {document.getElementById('result').innerHTML = `Ket qua la : ${number1 / number2}` }
            </div>
        )
    }

        return (
            <div>
                <input type={'text'} id={'number1'}/>
                <br/>
                <input type={'text'} id={'number2'}/>
                <h4 id={'result'}> Result</h4>
                <button onClick={sumNumber}> +</button>
                <button onClick={minusNumber}> -</button>
                <button onClick={multiNumber}> *</button>
                <button onClick={divideNumber}> /</button>
            </div>
        );

}

export default Basic_Calculator
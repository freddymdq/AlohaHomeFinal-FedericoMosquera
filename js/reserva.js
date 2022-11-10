

const unaPersona =Number(3500)

let vacationCalc = document.getElementById('vacationCalc')

    vacationCalc.addEventListener('submit', calcGastos)


    function calcGastos (e){

            e.preventDefault();

        let nombre = document.getElementById('nombre').value,
            dni = document.getElementById('dni').value,
            pasajeros = document.getElementById('pasajeros').value,
            noches = document.getElementById('noches').value;

        let costoEstadia = (parseInt(unaPersona)*parseInt(pasajeros))*parseInt(noches);
        
        UI(pasajeros, noches, costoEstadia)
        
    }

    function UI(pasajeros, noches, costoEstadia){
        let result = document.getElementById('result')
        let dataPrint = document.createElement('div')
        dataPrint.innerHTML = `
                <div class="container-data row">
                    <div class="col s4">
                        <h6>${pasajeros}</h6>
                    </div>
                    <div class="col s4">
                        <h6>${noches}</h6>
                    </div>
                    <div class="col s4">
                        <h6>${costoEstadia}</h6>
                    </div>
                </div>
        ` 
        result.appendChild(dataPrint)


    }
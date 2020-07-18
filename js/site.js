var room = {
    standard: 100,
    juniorSuite: 120,
    suite: 150
}

// Función para las tarifa por noche

function roomType (){
    var roomValue = document.getElementById('room').value;
    var roomPrice;

    switch(roomValue){
        case ('standard'):
            roomPrice = 100; 
            break;
        case ('juniorSuite'):
            roomPrice = 120;
            break;
        default:
            roomPrice = 150;
    }
    return roomPrice;   
}

// Función para incrementar si va con SPA la habitación

function spa (){
    var spaValue = document.getElementById('checkbox').checked;
    var roomPrice;
    
    (spaValue) ? roomPrice = roomType() + 20 : roomPrice = roomType();
    return roomPrice;
}

// Función para utilizar un factor de decremento o incremento, según
// la categoría de habitación que se elija.

function factor (){
    var factorValue = document.getElementById('category-room').value;
    var factorPrice;

    switch(factorValue){
        case ('single-room'):
            factorPrice = spa() - (spa() * 0.25);
            break;
        case('triple-room'):
            factorPrice = spa() + (spa() * 0.25);
            break;
        default:
            factorPrice = spa();
    }
    return factorPrice;
}

// Función para calcular si se utiliza el parking.

function parking(){
    var parkingValue = document.getElementById('parking-nights').value;
    var parkingPrice = parkingValue * 10;
    return parkingPrice;
}

// Función para calcular el número de noches.

function totalNights(){
    var totalNights = document.getElementById('number-nights').value;
    return totalNights
}

// Función para calcular e precio Total del alojamiento

function total(){
    var total = (factor() * totalNights()) + parking();
    document.getElementById('result').textContent = `El precio es: ${total}€`;
}

function total2(){
    var total = (factor() * totalNights()) + parking();
    document.getElementById('result2').textContent = `El precio es: ${total}€`;
}

// Evento para mostar por pantalla el Total del alojamiento

document.getElementById('button').addEventListener('click', total);











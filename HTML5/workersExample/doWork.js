addEventListener('message', _message, false);

// Procesamos el mensaje recibido
function _message(e) {
    var primes = _getPrimes(e.data);
    self.postMessage(primes);
}

// Devuelve un array con los números primos comprendidos entre 1 y value.
function _getPrimes(value) {
    var primes = [];

    for (var i = 1; i <= value; i++) {
        if (_isPrime(i))
            primes.push(i);
    }

    return primes;
}

// Devuelve true si un número es primo, false en otro caso.
function _isPrime(n) {
    if (n < 2) return false;
    var m = Math.sqrt(n);
    for (var i = 2; i <= m; i++)
        if (n % i === 0) return false;
    return true;
}



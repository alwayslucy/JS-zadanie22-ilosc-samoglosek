const ileSamoglosek = (string) => {

    let tablica = string.match(/[aeiou]+/gi);
    let tablica2 = []

    for (let i = 0; i < tablica.length; i++) {
        if (tablica[i].length > 1) {
            let tablica3 = tablica[i].split('');
            tablica2.push.apply(tablica2, tablica3);

        } else {
            tablica2.push(tablica[i]);
        }
    }

    let liczbaSamoglosek = tablica2.length
    return liczbaSamoglosek;
}

console.log(ileSamoglosek('Nauka programowania'));
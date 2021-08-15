let johannesburg = 'Johannesburg';
let harare = 'Harare';
let nairobi = 'Nairobi';
let lagos = 'Lagos';
let accra = 'Accra'
let lusaka = 'Lusaka'
let kinshasa = 'kinshasa'

function generator() {
    let number = Math.floor(Math.random() * 8)
    switch (number) {
        case 1:
            console.log(johannesburg);
            break;

        case 2:
            console.log(harare);
            break;

        case 3:
            console.log(nairobi)
            break;

        case 4:
            console.log(lagos)
            break;

        case 5:
            console.log(accra)
            break;

        case 6:
            console.log(lusaka);
            break;

        case 7:
            console.log(kinshasa)
            break;
    }
}
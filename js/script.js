window.addEventListener('load', function(){

    executeDivisionPromise();

    doFetch();

})

function divisionPromise(a, b){
    return new Promise((resolve, reject) => {
        if (b === 0){
            reject('Não é possível dividir por 0');
        }

        resolve (a / b);
    });
}

async function executeDivisionPromise(){
    const division = await divisionPromise(12, 2);
    console.log(division);
}

async function doFetch(){
//    fetch('https://api.github.com/users/erikamvn')
//        .then(res => {
//            res.json().then(data => {
//                showData(data);
//            });
//        })
//        .catch( error => console.log('Erro na requisição'));

    const res = await fetch('https://api.github.com/users/erikamvn');
    const json = await res.json();
    showData(json);

}

function showData(data){
    console.log(data);
}



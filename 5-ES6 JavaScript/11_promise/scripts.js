//usado para webservices, banco de dados enfim ....
function fazer(){

    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{

            resolve("ok");

        }, 3000);
    });

    return promise;
}

fazer().then((respota)=>{
    console.log(respota);

})
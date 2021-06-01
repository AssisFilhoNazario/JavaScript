const url = 'https://alunos.b7web.com.br/api/ping';
const params ={
    method:'POST',
    body:JSON.stringify({
        nome:'Assis',
        idade:99
    })
};

fetch(url, params)
    .then((r)=> r.json())
    .then((json)=>{
        console.log(json);
    });
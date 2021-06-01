function addEndereco (endereco){
    const {cidade, estado} = endereco;

    const novoEndereco = {
        cidade,
        estado,
        pais:'Brasil'
    }
    
    console.log(`${novoEndereco.cidade}, ${novoEndereco.estado}, ${novoEnderco.pais}`);
}


addEndereco({cidade: 'Morada Nova', estado:'Ceara'});

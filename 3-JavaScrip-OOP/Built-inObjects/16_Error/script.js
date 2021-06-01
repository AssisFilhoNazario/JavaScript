try{
    //
    throw new Error('Deu um probelma no codigo')
}catch(e){
    console.log(e.name + ": " +e.message)
}
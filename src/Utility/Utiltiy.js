// getDB
const getDB = ()=>{
    const storedData = localStorage.getItem('item');
    if(storedData){
        const storedDataSTR = JSON.parse(storedData);
        return storedDataSTR
    }else{
        return []
    }
}
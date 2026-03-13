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


// SavDB
const saveDB = (items)=>{
    const saveDB = JSON.stringify(items);
    localStorage.setItem('item',saveDB)
}

// AddDB
const addDB = (id)=>{
    const storedDatas = getDB();
    if(storedDatas.includes(id)){
        alert("This Furtunicer already exist")
    }else{
        storedDatas.push(id)
    }
    saveDB(storedDatas)
}

// RemoveDB
const removeDB = (id)=>{
    const storedDB = getDB();
    const reminingDB = storedDB.filter(itme=>itme.id !==id);
    saveDB(reminingDB)
}


export {addDB,getDB,removeDB}
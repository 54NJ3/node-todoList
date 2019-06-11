const fs = require('fs');

let list = []

const save = () =>{
    return new Promise((resolve,reject) => {
        let data = JSON.stringify(list);
        fs.writeFile('./json/data.json', data, (error) =>{
            if(error)
                reject (error)
            else 
                resolve ('Your list has been saved correctly')
        })
    })
}

const read = () => {
    try{
        list = require('../json/data.json')
    } catch (error) {
        list = []
    }
}

const getList = () => {
    return list
}

const update = (description, complete) =>{
    let index = list.findIndex(task => task.description === description)

    if(index >=0) {
        list[index].complete = complete
        save()
    }else{
        return false
    }

    return list[index]
}

const deleteTask = (description) =>{
    let index = list.findIndex(task => task.description === description)
    if(index >=0) {
        list.splice(index,1)
        save()
    }else{
        return false
    }

    return true
}

const create = (description) => {
    let task = {
        description,
        complete: false
    };

    list.push(task)
    
    save()
    .then(message => console.log(message))
    .catch(error => console.log(error))
    
    return task;
}

module.exports = {
    create,
    read,
    getList,
    update,
    deleteTask,
    save
}
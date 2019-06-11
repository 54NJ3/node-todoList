const description = {
    demand : true,
    alias: 'd',
    desc : 'Description of the new task'
    };

const complete = {
    alias: 'c',
    default : true,
    desc : 'Description of the new task'
    };

const argv = require('yargs')
            .command('add', 'Create a new task', {
                description
            })
            .command('update', 'Update a task', {
                description,
                complete 
            })
            .command('delete' , 'Delete a task', {
                description
            })
            .help()
            .argv

module.exports = {
    argv
}
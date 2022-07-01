const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, deleteMovie, updateMovie }= require("./movie/functions");

//use async and wait(await) as we want to make sure this is done before moving on
const app = async (yargsObj) =>{
    try {
        // go back and try and understand below line
        // calls on function then dot notation runs method?
        await sequelize.sync({alter: true});
        //
        if (yargsObj.add) {
            //add something to movie table
            await addMovie ({title: yargsObj.title, actor: yargsObj.actor});



        } else if (yargsObj.list) {
            //list contents of movie table
            await listMovies({});



        } else if (yargsObj.update) {
            //update entry in movie table
            await updateMovie({title: yargsObj.title}, {title: yargsObj.newtitle, actor: yargsObj.newactor});


        
        } else if (yargsObj.delete) {
            //delte object from movie table
            await deleteMovie ({title: yargsObj.title});



        } else {
            console.log("incorrect command");
        }
    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close();
    }
}

app(yargs.argv)
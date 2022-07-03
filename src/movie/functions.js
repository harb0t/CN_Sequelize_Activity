const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async () => {
    try {
        const response = await Movie.findAll();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        const response = await Movie.destroy({where: movieObj});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async(filterObj, newDetails) => {
    try {
        const response = await Movie.update({title: newDetails.title, actor: newDetails.actor}, {where: {title: filterObj.title}});
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
};


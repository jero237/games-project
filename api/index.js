//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Videogame, Genre } = require("./src/db");
const { default: axios } = require('axios');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    //Genres
    const genres = await axios.get("https://api.rawg.io/api/genres?key=ceb0f6ea04044c50837e32de918ddad7")
    genres.data.results.forEach(element => {
      Genre.create({
        name: element.name
      })
    });

    ////TEST---------------
    // let testVideogame = await Videogame.create({
    //   name: "javier",
    //   description: "juego de mierda",
    //   platforms: [2, 3, 4, 5],
    //   image: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg"
    // })

    // await testVideogame.addGenres([2, 5, 10])

    //----------------------------

  });
});

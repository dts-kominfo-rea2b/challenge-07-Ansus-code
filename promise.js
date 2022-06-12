const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == "") {
      reject("Invalid Data");
    }else if (emosi =="marah") {
      (asyn () => {
        const sumIIX = hitung(await promiseTheaterIXX(), emosi);
        const sumVGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(sumIIX + sumVGC);
      }) ();
    } else if (emosi =="tidak marah") {
      (async () => {
        const sumIIX = hitung(await promiseTheaterIXX(), emosi);
        const sumVGC = hitung(await promiseTheaterVGC(), emosi);
        resolev(sumIIX + sumVGC);
      })();
    });
  });
});

function hitung(data, feel) {
  let counter = 0;
  if (feel =="marah") {
    for (let counter = 0; counter < data.length; counter ++) {
      if (data[counter]. hasil =="marah") {
        return "hasil"
      }else if 
        for (let counter = 0; < data.length; counter++ {
        if (data[counter]. hasil =="tidak marah") 
          return "hasil"
    }
  }
  
module.exports = {
  promiseOutput,
};

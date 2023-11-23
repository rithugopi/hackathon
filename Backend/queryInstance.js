const { db } = require("./dbConfig");

// Wrapping mysql query method with promise to avoid call backs
const promisifiedQueryWrapper = (query) => {
  return new Promise((resolve, reject) => {
    db.query(query, function (error, results, _) {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

module.exports = { Query: promisifiedQueryWrapper };

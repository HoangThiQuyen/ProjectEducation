module.exports = {
  muntibleMongooesToObject: function (mongooesArrays) {
    return mongooesArrays.map((mongooes) => mongooes.toObject());
  },
  mongooesToObject: function (mongooesObject) {
    return mongooesObject ? mongooesObject.toObject() : mongooesObject;
  },
};

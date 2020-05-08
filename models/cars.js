module.exports = function(sequelize, DataTypes) {
  var Cars = sequelize.define("Cars", {
    carId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    licensePlate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    pricePerDay: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1],
        isDecimal: true
      }
    }
  });
  return Cars;
};

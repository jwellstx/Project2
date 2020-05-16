module.exports = function(sequelize, DataTypes) {
  var Cars = sequelize.define("Cars", {
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
    vehicleType: {
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

  // each transaction has one car
  Cars.associate = models => {
    Cars.hasOne(models.Transaction, {
      // foreignKey: {
      //   allowNull: false
      // }
    });
  };

  return Cars;
};

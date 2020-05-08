module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    transactionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isInt: true,
        len: [1]
      }
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isInt: true,
        len: [1]
      }
    },
    rentalDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    rentalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    pricePaid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
        notEmpty: true
      }
    }
  });
  return Transaction;
};

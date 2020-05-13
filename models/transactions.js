module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
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

  Transaction.associate = models => {
    Transaction.belongsTo(models.Cars, {});
    Transaction.belongsTo(models.Customer, {});
  };

  return Transaction;
};

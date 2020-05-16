module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    transactionDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("NOW")
    },
    rentalDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("NOW")
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

  // each transaction has a car and a customer
  Transaction.associate = models => {
    Transaction.belongsTo(models.Cars, {});
    Transaction.belongsTo(models.Customer, {});
  };

  return Transaction;
};

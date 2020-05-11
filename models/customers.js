module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //custom phone number checker?
        notEmpty: true,
        len: [9]
      }
    },
    driversLicenseNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        notEmpty: true
      }
    },
    driversLicenseState: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1]
      }
    }
  });
  return Customer;
};

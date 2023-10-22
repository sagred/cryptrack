import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const hash = bcrypt.hashSync(value, 10);
            this.setDataValue('password', hash);
        }
    }
});

export default User;


import { Sequelize } from 'Sequelize';

import sequelize from '../utils/database.js';
import Image from '../models/image.js'
const vehicle = sequelize.define('vehicles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    suitcases: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    places: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    available: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    driver: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

export default vehicle;

vehicle.hasMany(Image, { as: "images" })

Image.belongsTo(vehicle, {
    foreignKey: "vehicleId",
    as: "vehicle"
})
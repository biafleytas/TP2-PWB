module.exports = (sequelize, Sequelize) => {
    const Mesa = sequelize.define("Mesa", {
        nombre_mesa: {
            type: Sequelize.STRING
        },
        id_restaurante: {
            type: Sequelize.BIGINT,
            references: {
                model: 'Restaurantes', // 'fathers' refers to table name
                key: 'id_restaurante', // 'id' refers to column name in fathers table
            },
        },
        posicion: {
            type: Sequelize.STRING
        },
        planta: {
            type: Sequelize.BIGINT
        },
        capacidad: {
            type: Sequelize.BIGINT
        },
        id_mesa: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        timestamps: false,
    });
    return Mesa;
};
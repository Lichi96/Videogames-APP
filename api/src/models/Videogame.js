const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('videogame', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		released: {
			type: DataTypes.DATEONLY,
			defaultValue: DataTypes.NOW
		},
		rating: {
			type: DataTypes.FLOAT,
			defaultValue: 0
		},
		platforms: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false
		},
		image: {
			type: DataTypes.STRING(1234),
			defaultValue: "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"
		},
		createdInDB: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	}, {
		timestamps: false
	});
};

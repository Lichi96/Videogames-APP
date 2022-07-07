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
			defaultValue: 1
		},
		platforms: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false
		},
		image: {
			type: DataTypes.STRING(1234),
			defaultValue: "https://p4.wallpaperbetter.com/wallpaper/51/182/360/video-game-game-over-minimalist-wallpaper-preview.jpg"
		},
		createdInDB: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	}, {
		timestamps: false
	});
};

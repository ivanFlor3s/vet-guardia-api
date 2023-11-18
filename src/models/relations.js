import { Review } from "./review.js";
import { User } from "./user.js";
import { Veterinaria } from "./veterinaria.js";

export const configRelations = () => {
    User.hasOne(Veterinaria );
    Veterinaria.belongsTo(User);

    User.belongsToMany(Veterinaria, { through: Review, foreignKey: 'UserId' });
    Veterinaria.belongsToMany(User, { through: Review, foreignKey: 'VeterinariaId' });

}
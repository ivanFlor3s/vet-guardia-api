import { User } from "./user.js";
import { Veterinaria } from "./veterinaria.js";

export const configRelations = () => {
    User.hasOne(Veterinaria );
    Veterinaria.belongsTo(User);
}
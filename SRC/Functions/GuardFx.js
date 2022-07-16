const Discord = require('discord.js');


class GuardFx {
    static test() {
}

static closeall(obj, permes) {
    obj.roles.cache.filter(rol => rol.editable).filter(rol => permes.some(xd => rol.permissions.has(xd))).forEach(async (rol) => rol.setPermissions(0));
}
  }
module.exports = GuardFx;

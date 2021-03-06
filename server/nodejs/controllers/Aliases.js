'use strict';

var Aliases = require('./AliasesService');

module.exports.aliasbalance = function aliasbalance (req, res, next) {
  Aliases.aliasbalance(req.swagger.params, res, next);
};

module.exports.aliasinfo = function aliasinfo (req, res, next) {
  Aliases.aliasinfo(req.swagger.params, res, next);
};

module.exports.aliasexists = function aliasexists (req, res, next) {
  Aliases.aliasexists(req.swagger.params, res, next);
}

module.exports.aliasnew = function aliasnew (req, res, next) {
  Aliases.aliasnew(req.swagger.params, res, next);
};

module.exports.aliaspay = function aliaspay (req, res, next) {
  Aliases.aliaspay(req.swagger.params, res, next);
};

module.exports.aliasupdate = function aliasupdate (req, res, next) {
  Aliases.aliasupdate(req.swagger.params, res, next);
};

module.exports.aliaswhitelist = function aliaswhitelist (req, res, next) {
  Aliases.aliaswhitelist(req.swagger.params, res, next);
};

module.exports.aliasclearwhitelist = function aliasclearwhitelist (req, res, next) {
  Aliases.aliasclearwhitelist(req.swagger.params, res, next);
};

module.exports.aliasupdatewhitelist = function aliasupdatewhitelist (req, res, next) {
  Aliases.aliasupdatewhitelist(req.swagger.params, res, next);
};

module.exports.syscointxfund = function syscointxfund(req, res, next) {
  Aliases.syscointxfund(req.swagger.params, res, next);
};

module.exports.aliasaddscript = function aliasaddscript (req, res, next) {
  Aliases.aliasaddscript(req.swagger.params, res, next);
};

'use strict';


var Certificates = require('./CertificatesService');

module.exports.certnew = function certnew (req, res, next) {
  Certificates.certnew(req.swagger.params, res, next);
};

module.exports.certtransfer = function certtransfer (req, res, next) {
  Certificates.certtransfer(req.swagger.params, res, next);
};

module.exports.certupdate = function certupdate (req, res, next) {
  Certificates.certupdate(req.swagger.params, res, next);
};

module.exports.certinfo = function certinfo (req, res, next) {
  Certificates.certinfo(req.swagger.params, res, next);
};
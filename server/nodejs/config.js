var config = {};

//leave blank for default location of /root/.syscoin/ (must include trailing slash)
config.sys_location = process.env.SYS_LOCATION || "/root/.syscoin/";

config.api_secret = "iamapisecret";
config.secure = process.env.SECURE || true;
config.port = process.env.PORT || 8001;

//NOTE: SECURE INFO SHOULD NOT BE COMMITTED TO PUBLIC GIT
//mongodb config
config.mongodb = {
  database_url: process.env.MONGODB_URL || ""
};

module.exports = config;
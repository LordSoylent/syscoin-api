var syscoinClient = require('../index').syscoinClient;
var varUtils = require('./util/varUtils');


exports.offeraccept = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAcceptRequest)
  **/

  var defaultArgs = {
    quantity: 1,
    message: "",
    exttxid: "",
    paymentoption: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  //correct type issues
  args.request.value.quantity = args.request.value.quantity.toString(); //int to string

  syscoinClient.offerAccept(args.request.value.alias, args.request.value.guid, args.request.value.quantity, args.request.value.message, args.request.value.exttxid, args.request.value.paymentoption, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeracceptacknowledge = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  * offeracceptguid (String)
  **/
  syscoinClient.offerAcceptAcknowledge(args.offerguid.value, args.offeracceptguid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept acknowledge:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeracceptfeedback = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  * offeracceptguid (String)
  * feedback (String)
  * rating (BigDecimal)
  **/

  var defaultArgs = {
    feedback: "",
    rating: 5
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  //correct type issues
  args.rating.value = args.rating.value.toString(); //int to string

  syscoinClient.offerAcceptFeedback(args.offerguid.value, args.offeracceptguid.value, args.feedback.value, args.rating.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept feedback:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeracceptlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * acceptguid (String)
  * privatekey (String)
  **/

  var defaultArgs = {
    aliases: [],
    acceptguid: "",
    privatekey: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  syscoinClient.offerAcceptList(args.aliases.value, args.acceptguid.value, args.privatekey.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer accept list:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offeraddwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferAddWhitelistRequest)
  **/

  var defaultArgs = {
    discountPercentage: 0
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  //correct type issues
  args.request.value.discountPercentage = args.request.value.discountPercentage.toString();

  syscoinClient.offerAddWhitelist(args.request.value.offerguid, args.request.value.aliasguid, args.request.value.discountPercentage, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer add whitelist:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerclearwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferClearWhitelistRequest)
  **/
  syscoinClient.offerClearWhitelist(args.request.value.offerguid, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer clear whitelist:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerfilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * regexp (String)
  * from (BigDecimal)
  * safesearch (String)
  * category (String)
  **/

  var defaultArgs = {
    from: 0,
    safesearch: "Yes",
    category: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  //correct type issues
  args.from.value = args.from.value.toString();

  syscoinClient.offerFilter(args.regexp.value, args.from.value, args.safesearch.value, args.category.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer filter:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerhistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offer (String)
  **/
  syscoinClient.offerHistory(args.offer.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer history:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerinfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * guid (String)
  **/
  syscoinClient.offerInfo(args.guid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer info:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerlink = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferLinkRequest)
  **/

  var defaultArgs = {
    description: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  syscoinClient.offerLink(args.request.value.alias, args.request.value.guid, args.request.value.comission, args.request.value.description, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer link:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerlist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aliases (List)
  * offer (String)
  * privatekey (String)
  **/

  var defaultArgs = {
    aliases: [],
    offer: "",
    privatekey: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args);

  syscoinClient.offerList(args.aliases.value, args.offer.value, args.privatekey.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer list:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offernew = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferNewRequest)
  **/

  var defaultArgs = {
    certguid: "",
    paymentoptions: "",
    geolocation: "",
    safesearch: "Yes",
    private: false
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  //correct type issues
  args.request.value.private = args.request.value.private ? "1" : "0"; //bool converted string
  args.request.value.quantity = args.request.value.quantity.toString(); //int to string
  args.request.value.price = args.request.value.price.toString(); //float to string

  syscoinClient.offerNew(args.request.value.alias, args.request.value.category, args.request.value.title, args.request.value.quantity, args.request.value.price, args.request.value.description, args.request.value.currency, args.request.value.certguid, args.request.value.paymentoptions, args.request.value.geolocation, args.request.value.safesearch, args.request.value.private, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer new:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerremovewhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferRemoveWhitelistRequest)
  **/
  syscoinClient.offerRemoveWhitelist(args.request.value.offerguid, args.request.value.aliasguid, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer remove whitelist:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerupdate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * request (OfferUpdateRequest)
  **/

  var defaultArgs = {
    description: "",
    currency: "SYS",
    private: false,
    certguid: "",
    geolocation: "",
    safesearch: "Yes",
    commission: 0,
    paymentoptions: ""
  };
  args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

  //correct type issues
  args.request.value.private = args.request.value.private ? "1" : "0"; //bool converted string
  args.request.value.quantity =  args.request.value.quantity.toString(); //int to string
  args.request.value.price = args.request.value.price.toString(); //float to string
  args.request.value.comission = args.request.value.comission.toString(); //float to string
  
  syscoinClient.offerUpdate(args.request.value.alias, args.request.value.guid, args.request.value.category, args.request.value.title, args.request.value.quantity, args.request.value.price, args.request.value.description, args.request.value.currency, args.request.value.private, args.request.value.certguid, args.request.value.geolocation, args.request.value.safesearch, /*args.request.value.comission, args.request.value.paymentoptions,*/ function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer update:', result);
    res.end(JSON.stringify(result));
  });
}

exports.offerwhitelist = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offerguid (String)
  **/
  syscoinClient.offerWhitelist(args.offerguid.value, function(err, result, resHeaders) {
    res.setHeader('Content-Type', 'application/json');

    if (err) {
      console.log(err);
      return res.end(JSON.stringify(err.toString()));
    }

    console.log('Offer whitelist:', result);
    res.end(JSON.stringify(result));
  });
}


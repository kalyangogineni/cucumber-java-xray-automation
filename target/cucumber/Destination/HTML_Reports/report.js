$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1_AIRE-43.feature");
formatter.feature({
  "line": 3,
  "name": "Data Collector for \"On Hand\" data attribute",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AIRE-148"
    },
    {
      "line": 2,
      "name": "@AIRE-43"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#UPC \"3400056\" under a store 100 does not exist."
    }
  ],
  "line": 7,
  "name": "To retrieve on Hands Quanity for a store in which request UPC which does not exist",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-on-hands-quanity-for-a-store-in-which-request-upc-which-does-not-exist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@AIRE-91"
    },
    {
      "line": 6,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "\"On Hand System\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 11
    },
    {
      "cells": [
        "onHands",
        "404",
        "USD",
        "3400056"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Application should respond with reason code \"502\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 18,
      "value": "#for Store 500, on hand system responds with 500 Error"
    }
  ],
  "line": 20,
  "name": "To retrieve On Hand Quantity for a Store for which on hand system gives 500 Error response",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-on-hand-quantity-for-a-store-for-which-on-hand-system-gives-500-error-response",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@AIRE-92"
    },
    {
      "line": 19,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "\"On Hand System\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 24
    },
    {
      "cells": [
        "onHands",
        "500",
        "USD",
        "3400056002000"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Application should respond with reason code \"502\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 32,
  "name": "To retrieve onHands Quanity for a UPC when the Quantity of a UPC is in negative",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-onhands-quanity-for-a-upc-when-the-quantity-of-a-upc-is-in-negative",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@AIRE-101"
    },
    {
      "line": 31,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 33,
      "value": "## OnHand Quantity is set to -1 in mock"
    }
  ],
  "line": 34,
  "name": "\"OnHands Inventory\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 37
    },
    {
      "cells": [
        "onHands",
        "109",
        "US",
        "340005600"
      ],
      "line": 38
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Application should respond with reason code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Response should contain",
  "rows": [
    {
      "cells": [
        "value",
        "[{\"quantity\":\"-1\",\"location\":\"SALESFLOOR\", \"inventoryState\":\"AVAILABLE\"}]"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Application should respond back with valid \"MediaType\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 47,
      "value": "#for Store 108, downstream system delays the response for 6 sec which causes data service to cause timeout."
    }
  ],
  "line": 49,
  "name": "To retrieve On Hand quantity for a store and down stream system timesout.",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-on-hand-quantity-for-a-store-and-down-stream-system-timesout.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@AIRE-95"
    },
    {
      "line": 48,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "\"On Hand System\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 53
    },
    {
      "cells": [
        "onHands",
        "108",
        "USD",
        "3400056002000"
      ],
      "line": 54
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Application should respond with reason code \"502\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 62,
  "name": "To retrieve a invalid attribute from a store which is not defined",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-a-invalid-attribute-from-a-store-which-is-not-defined",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@AIRE-118"
    },
    {
      "line": 61,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "\"Store\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 65
    },
    {
      "cells": [
        "test",
        "900",
        "US",
        "3400056002000"
      ],
      "line": 66
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Application should respond with reason code \"400\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 70,
      "value": "#On Hand Inventory System only responds back with Claim status for a UPC \"340005600\" under a store 101"
    }
  ],
  "line": 72,
  "name": "To retrieve On Hand Order quantity for a store and UPC for which downstream only responds back with only claim status.",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-on-hand-order-quantity-for-a-store-and-upc-for-which-downstream-only-responds-back-with-only-claim-status.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@AIRE-96"
    },
    {
      "line": 71,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "\"OnHands Inventory\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 76
    },
    {
      "cells": [
        "onHands",
        "101",
        "USD",
        "340005600"
      ],
      "line": 77
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Application should respond with reason code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Application should respond back with valid \"MediaType\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 82,
      "value": "#retrieving onhands from Store 404 , on hand system gives 404 response"
    }
  ],
  "line": 84,
  "name": "To retrieve OnHand orders for a store for which on hand system gives 404 in response",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-onhand-orders-for-a-store-for-which-on-hand-system-gives-404-in-response",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@AIRE-93"
    },
    {
      "line": 83,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "\"On Hand System\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 88
    },
    {
      "cells": [
        "onHands",
        "404",
        "USD",
        "3400056002000"
      ],
      "line": 89
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "Application should respond with reason code \"502\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 94,
      "value": "#For Store 400, Down stream system responds with 400 bad request"
    }
  ],
  "line": 96,
  "name": "To retrieve OnHand quantity and down stream system responds with 400 bad request",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-onhand-quantity-and-down-stream-system-responds-with-400-bad-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@AIRE-94"
    },
    {
      "line": 95,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "\"On Hand System\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 101
    },
    {
      "cells": [
        "onHands",
        "400",
        "USD",
        "3400056002000"
      ],
      "line": 102
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "Application should respond with reason code \"502\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 107,
      "value": "#The Quantity of UPC in a store is 0.2"
    }
  ],
  "line": 109,
  "name": "To retrieve onHands from a store for a UPC which have a quantity in decimals",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-onhands-from-a-store-for-a-upc-which-have-a-quantity-in-decimals",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 108,
      "name": "@AIRE-117"
    },
    {
      "line": 108,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 110,
      "value": "## On hand system return 0.2 as quanity value"
    }
  ],
  "line": 111,
  "name": "\"On Hand System\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 113
    },
    {
      "cells": [
        "onHands",
        "110",
        "US",
        "3400056002000"
      ],
      "line": 114
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "Application should respond with reason code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Response should contain",
  "rows": [
    {
      "cells": [
        "value",
        "[{\"quantity\":\"0.2\",\"location\":\"SALESFLOOR\", \"inventoryState\":\"AVAILABLE\"}]"
      ],
      "line": 119
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "Application should respond back with valid \"MediaType\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 123,
      "value": "#When we make a call to data service to retrieve on hand order under upc with valid store numbers and valid UPC"
    }
  ],
  "line": 125,
  "name": "To retrieve onHands Quanity from UPC with valid data",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-onhands-quanity-from-upc-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 124,
      "name": "@AIRE-86"
    },
    {
      "line": 124,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "\"OnHands Inventory\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 129
    },
    {
      "cells": [
        "onHands",
        "900",
        "US",
        "340005600"
      ],
      "line": 130
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "Application should respond with reason code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "Application should respond with valid response message",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Response should contain",
  "rows": [
    {
      "cells": [
        "value",
        "[{\"quantity\":\"100\",\"location\":\"SALESFLOOR\", \"inventoryState\":\"AVAILABLE\"}]"
      ],
      "line": 136
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Response should contain",
  "rows": [
    {
      "cells": [
        "name",
        "onHands"
      ],
      "line": 139
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 140,
      "value": "#{\"expiryTime\"\u003d342423 , \"results\":[{\"name\":\"onHands\","
    },
    {
      "line": 141,
      "value": "# \"value\":\"[{\"quantity\":\"10\",\"location\":\"SALESFLOOR\"}]\","
    },
    {
      "line": 142,
      "value": "#\"ttlInMilliseconds\":20000}]}"
    }
  ],
  "line": 144,
  "name": "Application should respond back with valid \"MediaType\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 146,
      "value": "#For upc \"340005600\" Store 103 gives Zero on hand quanity"
    }
  ],
  "line": 148,
  "name": "To retrieve On Hand quantity from a store for UPC which have 0 available and 0 claim quanitity",
  "description": "",
  "id": "data-collector-for-\"on-hand\"-data-attribute;to-retrieve-on-hand-quantity-from-a-store-for-upc-which-have-0-available-and-0-claim-quanitity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 147,
      "name": "@AIRE-97"
    },
    {
      "line": 147,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 149,
  "name": "\"OnHands Inventory\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 152
    },
    {
      "cells": [
        "onHands",
        "103",
        "US",
        "340005600"
      ],
      "line": 153
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "Application should respond with reason code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "Response should contain",
  "rows": [
    {
      "cells": [
        "value",
        "[{\"quantity\":\"0\",\"location\":\"SALESFLOOR\", \"inventoryState\":\"AVAILABLE\"}]"
      ],
      "line": 158
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "Application should respond back with valid \"MediaType\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("2_AIRE-99.feature");
formatter.feature({
  "line": 3,
  "name": "Create oneops environments for QA mock services - wiremock",
  "description": "",
  "id": "create-oneops-environments-for-qa-mock-services---wiremock",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AIRE-148"
    },
    {
      "line": 2,
      "name": "@AIRE-99"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Oneops environments for mock services used by QA"
    },
    {
      "line": 6,
      "value": "#When we make a call to data service to retrieve on hand order under upc with valid store numbers and valid UPC"
    }
  ],
  "line": 8,
  "name": "To retrieve onHands Quanity from UPC with valid data",
  "description": "",
  "id": "create-oneops-environments-for-qa-mock-services---wiremock;to-retrieve-onhands-quanity-from-upc-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@AIRE-86"
    },
    {
      "line": 7,
      "name": "@AIRE-87"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "\"OnHands Inventory\" is  up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User retrieves data from \"upc\" with",
  "rows": [
    {
      "cells": [
        "attribute",
        "Store_ID",
        "Country_Code",
        "upcNumber_OR_GtinNumber"
      ],
      "line": 12
    },
    {
      "cells": [
        "onHands",
        "900",
        "US",
        "340005600"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Application should respond with reason code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Application should respond with valid response message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Response should contain",
  "rows": [
    {
      "cells": [
        "value",
        "[{\"quantity\":\"100\",\"location\":\"SALESFLOOR\", \"inventoryState\":\"AVAILABLE\"}]"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Response should contain",
  "rows": [
    {
      "cells": [
        "name",
        "onHands"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#{\"expiryTime\"\u003d342423 , \"results\":[{\"name\":\"onHands\","
    },
    {
      "line": 24,
      "value": "# \"value\":\"[{\"quantity\":\"10\",\"location\":\"SALESFLOOR\"}]\","
    },
    {
      "line": 25,
      "value": "#\"ttlInMilliseconds\":20000}]}"
    }
  ],
  "line": 27,
  "name": "Application should respond back with valid \"MediaType\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("rest-api.feature");
formatter.feature({
  "line": 1,
  "name": "Test retrieval of user information",
  "description": "",
  "id": "test-retrieval-of-user-information",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Retrive user information with valid username and password",
  "description": "",
  "id": "test-retrieval-of-user-information;retrive-user-information-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I request user information with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should get http respose code as 200",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should get the valid response",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-retrieval-of-user-information;retrive-user-information-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "test-retrieval-of-user-information;retrive-user-information-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "test1",
        "pass1"
      ],
      "line": 10,
      "id": "test-retrieval-of-user-information;retrive-user-information-with-valid-username-and-password;;2"
    },
    {
      "cells": [
        "test2",
        "pass2"
      ],
      "line": 11,
      "id": "test-retrieval-of-user-information;retrive-user-information-with-valid-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Retrive user information with valid username and password",
  "description": "",
  "id": "test-retrieval-of-user-information;retrive-user-information-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I request user information with test1 and pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should get http respose code as 200",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should get the valid response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 32
    },
    {
      "val": "pass1",
      "offset": 42
    }
  ],
  "location": "SearchStepDefs.GetUserInformation(String,String)"
});
formatter.result({
  "duration": 921145248,
  "error_message": "java.net.UnknownHostException: google.com: unknown error\n\tat java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\n\tat java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:928)\n\tat java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1323)\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1276)\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:259)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:159)\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:304)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:611)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:446)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:882)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:1974)\n\tat com.jayway.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:492)\n\tat com.jayway.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:441)\n\tat com.jayway.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1396)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1178)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\n\tat com.jayway.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\n\tat com.jayway.restassured.filter.Filter$filter$0.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:73)\n\tat com.jayway.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:73)\n\tat com.jayway.restassured.filter.FilterContext$next.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1596)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:160)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\n\tat com.kalyan.cucumber.api.RestApiCalls.getCall(RestApiCalls.java:41)\n\tat com.kalyan.cucumber.stepdefs.SearchStepDefs.GetUserInformation(SearchStepDefs.java:20)\n\tat ✽.When I request user information with test1 and pass1(rest-api.feature:4)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Retrive user information with valid username and password",
  "description": "",
  "id": "test-retrieval-of-user-information;retrive-user-information-with-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I request user information with test2 and pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should get http respose code as 200",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should get the valid response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test2",
      "offset": 32
    },
    {
      "val": "pass2",
      "offset": 42
    }
  ],
  "location": "SearchStepDefs.GetUserInformation(String,String)"
});
formatter.result({
  "duration": 13225255,
  "error_message": "java.net.UnknownHostException: google.com\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:259)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:159)\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:304)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:611)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:446)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:882)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:1974)\n\tat com.jayway.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:492)\n\tat com.jayway.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:441)\n\tat com.jayway.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1396)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1178)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\n\tat com.jayway.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\n\tat com.jayway.restassured.filter.Filter$filter$0.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:73)\n\tat com.jayway.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat com.jayway.restassured.filter.Filter$filter$0.call(Unknown Source)\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:73)\n\tat com.jayway.restassured.filter.FilterContext$next.call(Unknown Source)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1596)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1210)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1019)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:160)\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\n\tat com.kalyan.cucumber.api.RestApiCalls.getCall(RestApiCalls.java:41)\n\tat com.kalyan.cucumber.stepdefs.SearchStepDefs.GetUserInformation(SearchStepDefs.java:20)\n\tat ✽.When I request user information with test2 and pass2(rest-api.feature:4)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
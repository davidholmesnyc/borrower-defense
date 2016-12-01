var colleges = [{"NAME":"Everest University-North Orlando","CITY":"Orlando","ST":"FL"},{"NAME":"Everest University-South Orlando","CITY":"Orlando","ST":"FL"},{"NAME":"Everest University-Melbourne","CITY":"Melbourne","ST":"FL"},{"NAME":"Everest University-Tampa","CITY":"Tampa","ST":"FL"},{"NAME":"Everest University-Brandon","CITY":"Tampa","ST":"FL"},{"NAME":"Everest University-Orange Park","CITY":"Orange Park","ST":"FL"},{"NAME":"Everest University-Largo","CITY":"Largo","ST":"FL"},{"NAME":"Everest University-Lakeland","CITY":"Lakeland","ST":"FL"},{"NAME":"Everest University-Jacksonville","CITY":"Jacksonville","ST":"FL"},{"NAME":"Everest University-Pompano Beach","CITY":"Pompano Beach","ST":"FL"},{"NAME":"Everest College-Merrionette Park","CITY":"Merrionette Park","ST":"IL"},{"NAME":"Everest College-Kansas City","CITY":"Kansas City","ST":"MO"},{"NAME":"Everest Institute-North Miami","CITY":"Miami","ST":"FL"},{"NAME":"Everest Institute-Kendall","CITY":"Miami","ST":"FL"},{"NAME":"Everest College-San Bernardino","CITY":"San Bernardino","ST":"CA"},{"NAME":"Everest College-Colorado Springs","CITY":"Colorado Springs","ST":"CO"},{"NAME":"Everest College-McLean","CITY":"Vienna","ST":"VA"},{"NAME":"Everest College-Santa Ana","CITY":"Santa Ana","ST":"CA"},{"NAME":"Everest College-Fort Worth South","CITY":"Ft Worth","ST":"TX"},{"NAME":"Everest College-Thornton","CITY":"Thornton","ST":"CO"},{"NAME":"Everest College-Aurora","CITY":"Aurora","ST":"CO"},{"NAME":"Globe University-Woodbury","CITY":"Woodbury","ST":"MN"},{"NAME":"Globe University-Eau Claire","CITY":"Eau Claire","ST":"WI"},{"NAME":"Globe University-Sioux Falls","CITY":"Sioux Falls","ST":"SD"},{"NAME":"Globe University-Minneapolis","CITY":"Minneapolis","ST":"MN"},{"NAME":"Globe University�Madison West","CITY":"Middleton","ST":"WI"},{"NAME":"Globe University-La Crosse","CITY":"Onalaska","ST":"WI"},{"NAME":"Globe University-Madison East","CITY":"Madison","ST":"WI"},{"NAME":"Globe University�Wausau","CITY":"Rothschild","ST":"WI"},{"NAME":"Globe University�Green Bay","CITY":"Green Bay","ST":"WI"},{"NAME":"Globe University-Appleton","CITY":"Grand Chute","ST":"WI"},{"NAME":"Everest Institute-Rochester","CITY":"Rochester","ST":"NY"},{"NAME":"Everest College-Arlington","CITY":"Arlington","ST":"TX"},{"NAME":"Everest Institute-Pittsburgh","CITY":"Pittsburgh","ST":"PA"},{"NAME":"Wyotech-Fremont","CITY":"Fremont","ST":"CA"},{"NAME":"Heald College-San Francisco","CITY":"San Francisco","ST":"CA"},{"NAME":"Heald College-Honolulu","CITY":"Honolulu","ST":"HI"},{"NAME":"Heald College-Portland","CITY":"Portland","ST":"OR"},{"NAME":"Heald College-Concord","CITY":"Concord","ST":"CA"},{"NAME":"Heald College-San Jose","CITY":"Milpitas","ST":"CA"},{"NAME":"Heald College-Hayward","CITY":"Hayward","ST":"CA"},{"NAME":"Heald College-Modesto","CITY":"Salida","ST":"CA"},{"NAME":"Heald College-Roseville","CITY":"Roseville","ST":"CA"},{"NAME":"Heald College-Salinas","CITY":"Salinas","ST":"CA"},{"NAME":"Heald College-Stockton","CITY":"Stockton","ST":"CA"},{"NAME":"Heald College-Rancho Cordova","CITY":"Rancho Cordova","ST":"CA"},{"NAME":"Heald College-Fresno","CITY":"Fresno","ST":"CA"},{"NAME":"ITT Technical Institute-Indianapolis","CITY":"Indianapolis","ST":"IN"},{"NAME":"ITT Technical Institute-Arlington Heights","CITY":"Arlington Heights","ST":"IL"},{"NAME":"ITT Technical Institute-Austin","CITY":"Austin","ST":"TX"},{"NAME":"ITT Technical Institute-Houston North","CITY":"Houston","ST":"TX"},{"NAME":"ITT Technical Institute-Harrisburg","CITY":"Harrisburg","ST":"PA"},{"NAME":"ITT Technical Institute-Houston West","CITY":"Houston","ST":"TX"},{"NAME":"ITT Technical Institute-Orange","CITY":"Orange","ST":"CA"},{"NAME":"ITT Technical Institute-Tampa","CITY":"Tampa","ST":"FL"},{"NAME":"ITT Technical Institute-Tempe","CITY":"Tempe","ST":"AZ"},{"NAME":"ITT Technical Institute-Westminster","CITY":"Westminster","ST":"CO"},{"NAME":"ITT Technical Institute-Arlington","CITY":"Arlington","ST":"TX"},{"NAME":"ITT Technical Institute-Webster","CITY":"Webster","ST":"TX"},{"NAME":"ITT Technical Institute-Boise","CITY":"Boise","ST":"ID"},{"NAME":"ITT Technical Institute-Albany","CITY":"Albany","ST":"NY"},{"NAME":"ITT Technical Institute-Pittsburgh","CITY":"Pittsburgh","ST":"PA"},{"NAME":"ITT Technical Institute-Tarentum","CITY":"Tarentum","ST":"PA"},{"NAME":"ITT Technical Institute-Getzville","CITY":"Getzville","ST":"NY"},{"NAME":"ITT Technical Institute-Dayton","CITY":"Dayton","ST":"OH"},{"NAME":"ITT Technical Institute-Strongsville","CITY":"Strongsville","ST":"OH"},{"NAME":"ITT Technical Institute-Maumee","CITY":"Maumee","ST":"OH"},{"NAME":"ITT Technical Institute-Earth City","CITY":"Earth City","ST":"MO"},{"NAME":"ITT Technical Institute-Omaha","CITY":"Omaha","ST":"NE"},{"NAME":"ITT Technical Institute-Cordova","CITY":"Cordova","ST":"TN"},{"NAME":"ITT Technical Institute-Warrensville Heights","CITY":"Warrensville Heights","ST":"OH"},{"NAME":"ITT Technical Institute-Swartz Creek","CITY":"Swartz Creek","ST":"MI"},{"NAME":"ITT Technical Institute-Fort Lauderdale","CITY":"Fort Lauderdale","ST":"FL"},{"NAME":"ITT Technical Institute-Troy","CITY":"Troy","ST":"MI"},{"NAME":"ITT Technical Institute-Oak Brook","CITY":"Oak Brook","ST":"IL"},{"NAME":"ITT Technical Institute-Charlotte South","CITY":"Charlotte","ST":"NC"},{"NAME":"ITT Technical Institute-South Bend","CITY":"South Bend","ST":"IN"},{"NAME":"ITT Technical Institute-Greenfield","CITY":"Greenfield","ST":"WI"},{"NAME":"ITT Technical Institute-Green Bay","CITY":"Green Bay","ST":"WI"},{"NAME":"ITT Technical Institute-Eden Prairie","CITY":"Eden Prairie","ST":"MN"},{"NAME":"ITT Technical Institute-Atlanta","CITY":"Atlanta","ST":"GA"},{"NAME":"ITT Technical Institute-Knoxville","CITY":"Knoxville","ST":"TN"},{"NAME":"ITT Technical Institute-Bessemer","CITY":"Bessemer","ST":"AL"},{"NAME":"ITT Technical Institute-Richardson","CITY":"Richardson","ST":"TX"},{"NAME":"ITT Technical Institute-Chantilly","CITY":"Chantilly","ST":"VA"},{"NAME":"ITT Technical Institute-Chattanooga","CITY":"Chattanooga","ST":"TN"},{"NAME":"ITT Technical Institute-Lake Mary","CITY":"Lake Mary","ST":"FL"},{"NAME":"ITT Technical Institute-Hialeah","CITY":"Hialeah","ST":"FL"},{"NAME":"ITT Technical Institute-Levittown","CITY":"Levittown","ST":"PA"},{"NAME":"ITT Technical Institute-Duluth","CITY":"Duluth","ST":"GA"},{"NAME":"ITT Technical Institute-Dunmore","CITY":"Dunmore","ST":"PA"},{"NAME":"ITT Technical Institute-St Petersburg","CITY":"Tampa","ST":"FL"},{"NAME":"ITT Technical Institute-Murray","CITY":"Murray","ST":"UT"},{"NAME":"ITT Technical Institute-Henderson","CITY":"Henderson","ST":"NV"},{"NAME":"ITT Technical Institute-Plymouth Meeting","CITY":"Plymouth Meeting","ST":"PA"},{"NAME":"ITT Technical Institute-Las Vegas","CITY":"North Las Vegas","ST":"NV"},{"NAME":"ITT Technical Institute-Charlotte North","CITY":"Charlotte","ST":"NC"},{"NAME":"ITT Technical Institute-Nashville","CITY":"Nashville","ST":"TN"},{"NAME":"ITT Technical Institute-Greenville","CITY":"Greenville","ST":"SC"},{"NAME":"ITT Technical Institute-Norwood","CITY":"Norwood","ST":"OH"},{"NAME":"ITT Technical Institute-Columbia","CITY":"Columbia","ST":"SC"},{"NAME":"ITT Technical Institute-Newburgh","CITY":"Newburgh","ST":"IN"},{"NAME":"ITT Technical Institute-Norfolk","CITY":"Norfolk","ST":"VA"},{"NAME":"ITT Technical Institute-Jacksonville","CITY":"Jacksonville","ST":"FL"},{"NAME":"ITT Technical Institute-Louisville","CITY":"Louisville","ST":"KY"},{"NAME":"ITT Technical Institute-Arnold","CITY":"Arnold","ST":"MO"},{"NAME":"ITT Technical Institute-Little Rock","CITY":"Little Rock","ST":"AR"},{"NAME":"ITT Technical Institute-Merrillville","CITY":"Merrillville","ST":"IN"},{"NAME":"ITT Technical Institute-Portland","CITY":"Portland","ST":"OR"},{"NAME":"ITT Technical Institute-Orland Park","CITY":"Orland Park","ST":"IL"},{"NAME":"ITT Technical Institute-Rancho Cordova","CITY":"Rancho Cordova","ST":"CA"},{"NAME":"ITT Technical Institute-Clovis","CITY":"Clovis","ST":"CA"},{"NAME":"ITT Technical Institute-Madison","CITY":"Madison","ST":"AL"},{"NAME":"ITT Technical Institute-DeSoto","CITY":"DeSoto","ST":"TX"},{"NAME":"ITT Technical Institute-San Antonio","CITY":"San Antonio","ST":"TX"},{"NAME":"ITT Technical Institute-San Bernardino","CITY":"San Bernardino","ST":"CA"},{"NAME":"ITT Technical Institute-Concord","CITY":"Concord","ST":"CA"},{"NAME":"ITT Technical Institute-Corona","CITY":"Corona","ST":"CA"},{"NAME":"ITT Technical Institute-Oakland","CITY":"Oakland","ST":"CA"},{"NAME":"ITT Technical Institute-North Charleston","CITY":"North Charleston","ST":"SC"},{"NAME":"ITT Technical Institute-National City","CITY":"National City","ST":"CA"},{"NAME":"ITT Technical Institute-High Point","CITY":"High Point","ST":"NC"},{"NAME":"ITT Technical Institute-Fort Myers","CITY":"Fort Myers","ST":"FL"},{"NAME":"ITT Technical Institute-San Dimas","CITY":"San Dimas","ST":"CA"},{"NAME":"ITT Technical Institute-Lathrop","CITY":"Lathrop","ST":"CA"},{"NAME":"ITT Technical Institute-West Covina","CITY":"San Dimas","ST":"CA"},{"NAME":"ITT Technical Institute-Tallahassee","CITY":"Tallahassee","ST":"FL"},{"NAME":"ITT Technical Institute-Torrance","CITY":"Torrance","ST":"CA"},{"NAME":"ITT Technical Institute-Tucson","CITY":"Tucson","ST":"AZ"},{"NAME":"ITT Technical Institute-Wyoming","CITY":"Wyoming","ST":"MI"},{"NAME":"ITT Technical Institute-Youngstown","CITY":"Youngstown","ST":"OH"},{"NAME":"ITT Technical Institute-Fort Wayne","CITY":"Fort Wayne","ST":"IN"},{"NAME":"ITT Technical Institute-Sylmar","CITY":"Sylmar","ST":"CA"},{"NAME":"ITT Technical Institute-Oxnard","CITY":"Oxnard","ST":"CA"},{"NAME":"Everest College-Alhambra","CITY":"Alhambra","ST":"CA"},{"NAME":"Everest Institute-Chelsea","CITY":"Chelsea","ST":"MA"},{"NAME":"Everest College-Bedford Park","CITY":"Bedford Park","ST":"IL"},{"NAME":"Everest College-Portland","CITY":"Portland","ST":"OR"},{"NAME":"Everest College-Vancouver","CITY":"Vancouver","ST":"WA"},{"NAME":"Everest College-Dallas","CITY":"Dallas","ST":"TX"},{"NAME":"Everest Institute-Silver Spring","CITY":"Silver Spring","ST":"MD"},{"NAME":"Wyotech-Laramie","CITY":"Laramie","ST":"WY"},{"NAME":"Wyo Tech-Blairsville","CITY":"Blairsville","ST":"PA"},{"NAME":"Everest College-Newport News","CITY":"Newport News","ST":"VA"},{"NAME":"Everest College-Chesapeake","CITY":"Chesapeake","ST":"VA"},{"NAME":"Everest Institute-Southfield","CITY":"Southfield","ST":"MI"},{"NAME":"Everest Institute-Dearborn","CITY":"Dearborn","ST":"MI"},{"NAME":"Everest Institute-Austin","CITY":"Austin","ST":"TX"},{"NAME":"Everest Institute-Detroit","CITY":"Detroit","ST":"MI"},{"NAME":"Everest Institute-South Plainfield","CITY":"South Plainfield","ST":"NJ"},{"NAME":"Everest Institute-Gahanna","CITY":"Gahanna","ST":"OH"},{"NAME":"Everest Institute-Jonesboro","CITY":"Jonesboro","ST":"GA"},{"NAME":"Everest Institute-Marietta","CITY":"Marietta","ST":"GA"},{"NAME":"Everest College-Atlanta West","CITY":"Atlanta","ST":"GA"},{"NAME":"Everest Institute-Cross Lanes","CITY":"Cross Lanes","ST":"WV"},{"NAME":"Everest Institute-Eagan","CITY":"Eagan","ST":"MN"},{"NAME":"Everest College-Anaheim","CITY":"Anaheim","ST":"CA"},{"NAME":"Everest College-Reseda","CITY":"Reseda","ST":"CA"},{"NAME":"Everest College-Gardena","CITY":"Gardena","ST":"CA"},{"NAME":"Everest Institute-Norcross","CITY":"Norcross","ST":"GA"},{"NAME":"Everest Institute-Brighton","CITY":"Brighton","ST":"MA"},{"NAME":"Everest College-North Aurora","CITY":"North Aurora","ST":"IL"},{"NAME":"Everest College-Skokie","CITY":"Skokie","ST":"IL"},{"NAME":"Everest College-Burr Ridge","CITY":"Burr Ridge","ST":"IL"},{"NAME":"Everest College-Melrose Park","CITY":"Melrose Park","ST":"IL"},{"NAME":"Wyotech-Long Beach","CITY":"Long Beach","ST":"CA"},{"NAME":"Everest College-West Los Angeles","CITY":"Los Angeles","ST":"CA"},{"NAME":"Everest College-City of Industry","CITY":"City of Industry","ST":"CA"},{"NAME":"University of Phoenix-Arizona","CITY":"Tempe","ST":"AZ"},{"NAME":"University of Phoenix-Colorado","CITY":"Lone Tree","ST":"CO"},{"NAME":"University of Phoenix-Oklahoma","CITY":"Oklahoma City","ST":"OK"},{"NAME":"Everest Institute-Grand Rapids","CITY":"Grand Rapids","ST":"MI"},{"NAME":"Everest Institute-Kalamazoo","CITY":"Kalamazoo","ST":"MI"},{"NAME":"Everest College-Merrillville","CITY":"Merrillville","ST":"IN"},{"NAME":"Everest College-Henderson","CITY":"Henderson","ST":"NV"},{"NAME":"Everest College-Springfield","CITY":"Springfield","ST":"MO"},{"NAME":"Everest College-Ontario Metro","CITY":"Ontario","ST":"CA"},{"NAME":"Everest Institute-San Antonio","CITY":"San Antonio","ST":"TX"},{"NAME":"Everest Institute-Greenspoint","CITY":"Houston","ST":"TX"},{"NAME":"Everest Institute-Hobby","CITY":"Houston","ST":"TX"},{"NAME":"Everest College-Phoenix","CITY":"Phoenix","ST":"AZ"},{"NAME":"Everest College-Mesa","CITY":"Mesa","ST":"AZ"},{"NAME":"Everest College-Salt Lake City","CITY":"West Valley City","ST":"UT"},{"NAME":"Everest College-Fort Worth","CITY":"Fort Worth","ST":"TX"},{"NAME":"Everest College-Bremerton","CITY":"Bremerton","ST":"WA"},{"NAME":"Everest College-Everett","CITY":"Everett","ST":"WA"},{"NAME":"Everest College-Tacoma","CITY":"Tacoma","ST":"WA"},{"NAME":"Everest College-Earth City","CITY":"Earth City","ST":"MO"},{"NAME":"Wyotech-Daytona","CITY":"Ormond Beach","ST":"FL"},{"NAME":"Globe Institute of Technology","CITY":"New York","ST":"NY"},{"NAME":"Everest College-Renton","CITY":"Renton","ST":"WA"},{"NAME":"Everest Institute-Bissonnet","CITY":"Houston","ST":"TX"},{"NAME":"Everest College-Seattle","CITY":"Seattle","ST":"WA"},{"NAME":"Everest Institute-Tigard","CITY":"Tigard","ST":"OR"},{"NAME":"Everest Institute-Bensalem","CITY":"Bensalem","ST":"PA"},{"NAME":"Everest College-Woodbridge","CITY":"Woodbridge","ST":"VA"},{"NAME":"ITT Technical Institute-Spokane Valley","CITY":"Spokane Valley","ST":"WA"},{"NAME":"ITT Technical Institute-Everett","CITY":"Everett","ST":"WA"},{"NAME":"ITT Technical Institute-Seattle","CITY":"Seattle","ST":"WA"},{"NAME":"Everest College-Ontario","CITY":"Ontario","ST":"CA"},{"NAME":"Everest College-Torrance","CITY":"Torrance","ST":"CA"},{"NAME":"ITT Technical Institute-Madison","CITY":"Madison","ST":"WI"},{"NAME":"ITT Technical Institute-Akron","CITY":"Akron","ST":"OH"},{"NAME":"ITT Technical Institute-Mobile","CITY":"Mobile","ST":"AL"},{"NAME":"ITT Technical Institute-Norwood","CITY":"Norwood","ST":"MA"},{"NAME":"ITT Technical Institute-Richmond","CITY":"Richmond","ST":"VA"},{"NAME":"ITT Technical Institute-Springfield","CITY":"Springfield","ST":"VA"},{"NAME":"ITT Technical Institute-Salem","CITY":"Salem","ST":"VA"},{"NAME":"ITT Technical Institute-Huntington","CITY":"Huntington","ST":"WV"},{"NAME":"ITT Technical Institute-Albuquerque","CITY":"Albuquerque","ST":"NM"},{"NAME":"ITT Technical Institute-Tulsa","CITY":"Tulsa","ST":"OK"},{"NAME":"ITT Technical Institute-Oklahoma City","CITY":"Oklahoma City","ST":"OK"},{"NAME":"ITT Technical Institute-Lexington","CITY":"Lexington","ST":"KY"},{"NAME":"ITT Technical Institute-Wilmington","CITY":"Wilmington","ST":"MA"},{"NAME":"ITT Technical Institute-Liverpool","CITY":"Liverpool","ST":"NY"},{"NAME":"ITT Technical Institute-Aurora","CITY":"Aurora","ST":"CO"},{"NAME":"ITT Technical Institute-Clive","CITY":"Clive","ST":"IA"},{"NAME":"ITT Technical Institute-Hilliard","CITY":"Hilliard","ST":"OH"},{"NAME":"ITT Technical Institute-Kansas City","CITY":"Kansas City","ST":"MO"},{"NAME":"ITT Technical Institute-Kennesaw","CITY":"Kennesaw","ST":"GA"},{"NAME":"ITT Technical Institute-Culver City","CITY":"Culver City","ST":"CA"},{"NAME":"ITT Technical Institute-Columbus","CITY":"Columbus","ST":"OH"},{"NAME":"ITT Technical Institute-Saint Rose","CITY":"Saint Rose","ST":"LA"},{"NAME":"ITT Technical Institute-Baton Rouge","CITY":"Baton Rouge","ST":"LA"},{"NAME":"ITT Technical Institute-Phoenix","CITY":"Phoenix","ST":"AZ"},{"NAME":"ITT Technical Institute-Wichita","CITY":"Wichita","ST":"KS"},{"NAME":"ITT Technical Institute-Johnson City","CITY":"Johnson City","ST":"TN"},{"NAME":"ITT Technical Institute-Canton","CITY":"Canton","ST":"MI"},{"NAME":"ITT Technical Institute-Dearborn","CITY":"Dearborn","ST":"MI"},{"NAME":"ITT Technical Institute-Springfield","CITY":"Springfield","ST":"MO"},{"NAME":"ITT Technical Institute-Cary","CITY":"Cary","ST":"NC"},{"NAME":"ITT Technical Institute-Owings Mills","CITY":"Owings Mills","ST":"MD"},{"NAME":"ITT Technical Institute-Madison","CITY":"Madison","ST":"MS"},{"NAME":"ITT Technical Institute-Bradenton","CITY":"Bradenton","ST":"FL"},{"NAME":"ITT Technical Institute-Phoenix West","CITY":"Phoenix","ST":"AZ"},{"NAME":"ITT Technical Institute-Cedar Rapids","CITY":"Cedar Rapids","ST":"IA"},{"NAME":"ITT Technical Institute-Brooklyn Center","CITY":"Brooklyn Center","ST":"MN"},{"NAME":"ITT Technical Institute-Orlando","CITY":"Lake Mary","ST":"FL"},{"NAME":"ITT Technical Institute-Waco","CITY":"Waco","ST":"TX"},{"NAME":"ITT Technical Institute-Myrtle Beach","CITY":"Myrtle Beach","ST":"SC"},{"NAME":"ITT Technical Institute-Durham","CITY":"Durham","ST":"NC"},{"NAME":"ITT Technical Institute-Hanover","CITY":"Hanover","ST":"MD"},{"NAME":"ITT Technical Institute-Philadelphia","CITY":"Philadelphia","ST":"PA"},{"NAME":"ITT Technical Institute-Marlton","CITY":"Marlton","ST":"NJ"},{"NAME":"ITT Technical Institute-Germantown","CITY":"Greenfield","ST":"WI"},{"NAME":"ITT Technical Institute-Southfield","CITY":"Troy","ST":"MI"},{"NAME":"ITT Technical Institute-West Palm Beach","CITY":"West Palm Beach","ST":"FL"},{"NAME":"ITT Technical Institute-Salem","CITY":"Salem","ST":"OR"},{"NAME":"ITT Technical Institute-Indianapolis East","CITY":"Indianapolis","ST":"IN"},{"NAME":"ITT Technical Institute-Douglasville","CITY":"Douglasville","ST":"GA"},{"NAME":"ITT Technical Institute-Overland Park","CITY":"Overland Park","ST":"KS"},{"NAME":"ITT Technical Institute-Springfield","CITY":"Springfield","ST":"IL"},{"NAME":"ITT Technical Institute-West Chester","CITY":"Norwood","ST":"OH"},{"NAME":"ITT Technical Institute-Pensacola","CITY":"Pensacola","ST":"FL"},{"NAME":"ITT Technical Institute-San Antonio East","CITY":"San Antonio","ST":"TX"},{"NAME":"ITT Technical Institute-Deerfield Beach","CITY":"Fort Lauderdale","ST":"FL"},{"NAME":"University of Phoenix-Arkansas","CITY":"Little Rock","ST":"AR"},{"NAME":"University of Phoenix-Connecticut","CITY":"Norwalk","ST":"CT"},{"NAME":"University of Phoenix-Washington DC","CITY":"Washington","ST":"DC"},{"NAME":"University of Phoenix-Florida","CITY":"Orlando","ST":"FL"},{"NAME":"University of Phoenix-Georgia","CITY":"Sandy Springs","ST":"GA"},{"NAME":"University of Phoenix-Hawaii","CITY":"Honolulu","ST":"HI"},{"NAME":"University of Phoenix-Illinois","CITY":"Schaumburg","ST":"IL"},{"NAME":"University of Phoenix-Indiana","CITY":"Indianapolis","ST":"IN"},{"NAME":"University of Phoenix-Kentucky","CITY":"Louisville","ST":"KY"},{"NAME":"University of Phoenix-Louisiana","CITY":"Baton Rouge","ST":"LA"},{"NAME":"University of Phoenix-Maryland","CITY":"Columbia","ST":"MD"},{"NAME":"University of Phoenix-Massachusetts","CITY":"Braintree","ST":"MA"},{"NAME":"University of Phoenix-Michigan","CITY":"Southfield","ST":"MI"},{"NAME":"University of Phoenix-Minnesota","CITY":"Saint Louis Park","ST":"MN"},{"NAME":"University of Phoenix-Missouri","CITY":"Saint Louis","ST":"MO"},{"NAME":"University of Phoenix-New Jersey","CITY":"Jersey City","ST":"NJ"},{"NAME":"University of Phoenix-North Carolina","CITY":"Charlotte","ST":"NC"},{"NAME":"University of Phoenix-Ohio","CITY":"Beachwood","ST":"OH"},{"NAME":"University of Phoenix-Oregon","CITY":"Tigard","ST":"OR"},{"NAME":"University of Phoenix-Pennsylvania","CITY":"Philadelphia","ST":"PA"},{"NAME":"University of Phoenix-Puerto Rico","CITY":"Guaynabo","ST":"PR"},{"NAME":"University of Phoenix-South Carolina","CITY":"Columbia","ST":"SC"},{"NAME":"University of Phoenix-Tennessee","CITY":"Nashville","ST":"TN"},{"NAME":"University of Phoenix-Texas","CITY":"Houston","ST":"TX"},{"NAME":"University of Phoenix-Utah","CITY":"Salt Lake City","ST":"UT"},{"NAME":"University of Phoenix-Alabama","CITY":"Birmingham","ST":"AL"},{"NAME":"University of Phoenix-New Mexico","CITY":"Albuquerque","ST":"NM"},{"NAME":"University of Phoenix-Washington","CITY":"Tukwila","ST":"WA"},{"NAME":"University of Phoenix-Idaho","CITY":"Meridian","ST":"ID"},{"NAME":"University of Phoenix-Mississippi","CITY":"Flowood","ST":"MS"},{"NAME":"University of Phoenix-Wisconsin","CITY":"Milwaukee","ST":"WI"},{"NAME":"University of Phoenix-Iowa","CITY":"Des Moines","ST":"IA"},{"NAME":"University of Phoenix-Nevada","CITY":"Las Vegas","ST":"NV"},{"NAME":"University of Phoenix-Virginia","CITY":"Glen Allen","ST":"VA"},{"NAME":"University of Phoenix-California","CITY":"Costa Mesa","ST":"CA"}]
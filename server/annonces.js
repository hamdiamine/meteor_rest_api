/*Les publications (GET)*/
Meteor.publish("getannonce", function (id) {
  return Annonces.find({_id:id, archived:0});
},{
  url: "getannonce/:0",
  httpMethod: "get"}
);

Meteor.publish("annoncesbytype", function (type, page, prop, sens) {
  var options = buildOptionsForAnnonce(page, prop, sens);
  return Annonces.find({type:type, archived:0}, options);
},{
  url: "annoncesbytype/:0/:1/:2/:3",
  httpMethod: "get"}
);

Meteor.publish("offresbyreg", function (reg_id, page, prop, sens) {
  var options = buildOptionsForAnnonce(page, prop, sens);
  return Annonces.find({type:'0', regid:reg_id, archived:0}, options);
},{
  url: "offresbyreg/:0/:1/:2/:3",
  httpMethod: "get"}
);

Meteor.publish("rechannonce", function (rechercheJson) {
  var recherche = JSON.parse(rechercheJson);
  var options = buildOptionsForAnnonce(recherche.page, recherche.sortType, recherche.sortOrient);
  var selector = {archived:0, };
  if(recherche.motsCle!==""){
    selector.$text = {$search:recherche.motsCle};
  }

  if(recherche.region){
    selector["region._id"] = recherche.region._id;
  }

  if(recherche.offre && !recherche.demande){
    selector.type = '0';
  }else if(!recherche.offre && recherche.demande){
    selector.type = '1';
  }else{
    null;//selector.type = {$in:['0','1']};
  }

  if(recherche.categorie){
    selector["categorie._id"] = recherche.categorie._id;
  }

  if(recherche.ville){
    selector["ville._id"] = recherche.ville._id;
  }

  if(recherche.particulier && !recherche.professionnel){
    selector.classement = '0';
  }else if(!recherche.particulier && recherche.professionnel){
    selector.classement = '1';
  }else {
    null;//selector.classement = {$in:['0','1']};
  }

  if(recherche.urgent){
    selector.estUrgent = 'true';
  }

  if(recherche.prixMin && !recherche.prixMax){
    selector.prix = {$gte:recherche.prixMin};
  }else if(!recherche.prixMin && recherche.prixMax){
    selector.prix = {$lte:recherche.prixMax};
  }else if(recherche.prixMin && recherche.prixMax){
    selector.prix = {$gte:recherche.prixMin,$lte:recherche.prixMax};
  }else {
    null;
  }

  console.log(recherche);
  console.log(selector);

  return Annonces.find(selector, options);
},{
  url: "rechannonce/:0",
  httpMethod: "get"}
);
/************************************************************************************/

/*Les methodes (SET)*/
Meteor.method("addAnn", function(annonce){
  annonce.createdAt = new Date();
  /*
  annonce.owner = Meteor.userId();
  annonce.username = Meteor.user().username;
  */
  return Annonces.insert(annonce)
},{
  url: "addAnn",
  getArgsFromRequest: function (request) {
    var content = request.body;
    return [content];
  },
  httpMethod: "post"}
);

Meteor.method("archiveAnn", function(annId){
  var ann = Annonces.findOne(annId);
  /*
  if(ann.owner !== Meteor.userId()){
    throw new Meteor.Error("not-authorized");
  } */
  Annonces.update(annId, { $set: { archived: 1}});
},{
  url: "archiveAnn",
  getArgsFromRequest: function (request) {
    var content = request.body;
    return [content];
  },
  httpMethod: "put"}
);

Meteor.method("deleteAnn", function(annId){
  var ann = Annonces.findOne(annId);
  /*
  if(ann.owner !== Meteor.userId()){
    throw new Meteor.Error("not-authorized");
  }
  */
  Annonces.remove(annId);
},{
  url: "deleteAnn",
  getArgsFromRequest: function (request) {
    var content = request.body;
    return [content];
  },
  httpMethod: "delete"}
);

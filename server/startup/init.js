Meteor.startup(function () {
  // Enable cross origin requests for all endpoints
  JsonRoutes.setResponseHeaders({
    "Cache-Control": "no-store",
    "Pragma": "no-cache",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
   });

   Annonces._ensureIndex({
    "titre": "text",
    "description": "text"
  });


  /*Decommenter ce code pour vider les tables de paramétrage
  Regions.remove({});
  Villes.remove({});
  /**/
  if (Regions.find().count() === 0) {
    var dataRegions = [
        {
          code:'0',
          label:'Alsace',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'1',
          label:'Aquitaine',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'2',
          label:'Auvergne',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'3',
          label:'Basse-Normandie',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'4',
          label:'Bourgogne',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'5',
          label:'Bretagne',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'6',
          label:'Centre',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'7',
          label:'Champagne-Ardenne',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'8',
          label:'Corse',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'9',
          label:'Franche-Comté',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'10',
          label:'Haute-Normandie',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'11',
          label:'Ile-de-France',
          createdAt: new Date(),
          villes:[
            {
              code:'PARIS',
              label: 'Paris',
              createdAt: new Date()
            }
          ]
        },
        {
          code:'12',
          label:'Languedoc-Roussillon',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'13',
          label:'Limousin',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'14',
          label:'Lorraine',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'15',
          label:'Midi-Pyrénées',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'16',
          label:'Nord-Pas-de-Calais',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'17',
          label:'Pays de la Loire',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'18',
          label:'Picardie',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'19',
          label:'Poitou-Charentes',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'20',
          label:'Provence-Alpes-Côte Azur',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'21',
          label:'Rhône-Alpes',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'22',
          label:'Guadeloupe',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'23',
          label:'Martinique',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'24',
          label:'Guyane',
          createdAt: new Date(),
          villes:[]
        },
        {
          code:'25',
          label:'Réunion',
          createdAt: new Date(),
          villes:[]
        }
      ];

      _.each(dataRegions, function(region){
        var reg_id = Regions.insert({code:region.code, label:region.label, createdAt: region.createdAt});
        _.each(region.villes, function(ville){
          Villes.insert({code: ville.code, label: ville.label, createdAt: ville.createdAt, regid: reg_id});
        });
      });
    }

    /*Decommenter ce code pour vider les tables de paramétrage
    TypeCategories.remove({});
    Categories.remove({});
    /**/
    if (TypeCategories.find().count() === 0) {
      var dataTypeCategories = [
        {
          code: 'PORTABLE',
          label: 'Portable',
          createdAt: new Date(),
          categories: [
            {
              code : 'SAMSUNGS3',
              label : 'SAMSUNG S3',
              createdAt : new Date()
            }
          ]
        }
      ];

      _.each(dataTypeCategories, function(typeCategorie){
        var typ_id = TypeCategories.insert({code:typeCategorie.code, label:typeCategorie.label, createdAt: typeCategorie.createdAt});
        _.each(typeCategorie.categories, function(categorie){
          Categories.insert({code: categorie.code, label: categorie.label, createdAt: categorie.createdAt, typid: typ_id});
        });
      });
    }

    /*Decommenter ce code pour vider les tables de paramétrage
    MotifAbus.remove({});
    /**/
    if (MotifAbus.find().count() === 0) {
      dataMotifAbus = [
        {
          code: 'PORNOGRAPHIE',
          label: 'Publication pornographique',
          createdAt : new Date()
        }
      ];

      _.each(dataMotifAbus, function(motifAbus){
        MotifAbus.insert({code: motifAbus.code, label : motifAbus.label, createAt: motifAbus.createdAt});
      });
    }

    /*Ajouter un train d'annonces
    if(Annonces.find().count()<100){
      var a = Annonces.findOne({_id:'hc3opWXJmoKKgGBfc'});
      var pas;
      for (pas = 0; pas < 10000; pas++) {
        Annonces.insert({
          etat:0,
          type:0,
          categorie:a.categorie,
          titre:a.titre,
          description:a.description,
          prix:a.prix,
          ville:a.ville,
          region:a.region,
          classement:a.classement,
          pseudo:a.pseudo,
          email:a.email,
          numTel:a.numTel,
          estUrgent:a.estUrgent,
          masqueNum:a.masqueNum,
          avecDem:a.avecDem,
          photos:a.photos,
          laptitude:a.laptitude,
          longitude:a.longitude,
          archived:0,
          createdAt:new Date()
        });

      }
    }
*/

});

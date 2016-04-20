Meteor.publish("tests", function (page, prop, sens) {
  var srt = {};
  var perPage = 20;
  if (prop==='0'){
    srt = {_id:parseInt(sens)};
  }else if (prop==='1') {
    srt = {code:parseInt(sens)};
  }
  else{
      srt = {type:parseInt(sens)};
  }
  var skp = (parseInt(page) - 1) * parseInt(perPage);
  var options = {limit : parseInt(perPage), skip: skp, sort:srt};
  return Tests.find({}, options);
},{
  url: "tests/:0/:1/:2/:3",
  httpMethod: "get"}
);

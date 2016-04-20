buildOptionsForAnnonce = function(page, prop, sens){
  var srt = {};
  var perPage = 20;
  if (prop==='0'){
    srt = {createdAt:parseInt(sens)};
  }else {
    srt = {prix:parseInt(sens)};
  }
  var skp = (parseInt(page) - 1) * parseInt(perPage);
  var options = {limit : parseInt(perPage), skip: skp, sort:srt};
  console.log(options);
  return options;
}

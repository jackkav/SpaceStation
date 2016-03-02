var prompt = require('prompt');
var _ = require('underscore');
prompt.start();

prompt.get(['query'], function(err, result) {
  if (err) {
    return onErr(err);
  }
  console.log('  Query: ' + result.query);
  if (_.contains(result.query, "?")){
  //is a question?
    console.log("42");
  }
  else {
    //is an assignment?
    console.log("OK")
  }

});

function onErr(err) {
  console.log(err);
  return 1;
}

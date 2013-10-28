var Classure = (function() {

  // ********** <COMMONS> **************************************************************************
  // ... put here private methods and variables COMMONS to all instances
  var privateCommon;
  // ********** </COMMONS> *************************************************************************

  // ********** <PRIVATED>**************************************************************************
  // ... put here private && publics methods and variables UNIQUES to each instance
  var api = function() {

    var privateUnique = 1,
     mock;

    var init = function(num){
      mock = num;
    };

    var update = function(){
      privateUnique++;
    };

    var show = function(){
      console.log("show :: privateUnique -> " + mock + " : " + privateUnique);
    };

    return {
      init: init,
      update : update,
      show: show
    };

  };

  return api;
  // ********** </PRIVATED>*************************************************************************

}());

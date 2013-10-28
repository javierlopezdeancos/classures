var Classure = (function() {

  // ********** <COMMONS> **************************************************************************
  // ... put here private methods and variables COMMONS to all instances
  var privateCommon = 'example private common';
  // ********** </COMMONS> *************************************************************************

  // ********** <PRIVATED>**************************************************************************
  // ... put here private && publics methods and variables UNIQUES to each instance
  var api = function() {

    var privateUnique;

    function init() {
      privateUnique = 1;
    };

    function update() {
      privateUnique++;
    };

    function show() {
      console.log("show :: privateUnique ->  : " + privateUnique);
    };

    function getPrivateUnique() {
      return privateUnique;
    }

    function getPrivateCommon() {
      return privateCommon;
    }

    return {
      init: init,
      update : update,
      show: show,
      getPrivateUnique : getPrivateUnique,
      getPrivateCommon : getPrivateCommon
    };

  };

  return api;
  // ********** </PRIVATED>*************************************************************************

}());

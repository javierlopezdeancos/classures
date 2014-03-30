var Classure = (function() {

  // ********** <COMMONS TO ALL INSTANCES> *********************************************************
  // ... put here private methods and variables COMMONS to all instances
  // --- <privated>
  var privateCommon = 'example private common';

  function privateCommonFunction(){
    privateCommon = 'set privateCommon';
  }
  // --- </privated>
  // ********** </COMMONS TO ALL INSTANCES> ********************************************************

  // ********** <UNIQUE FOR INSTANCE>***************************************************************
  // ... put here private && publics methods and variables UNIQUES to each instance
  var api = function() {

    // --- <privated>
    var privateUnique;

    function privateUniqueFunction(){
      privateUnique = 'set privatedUnique';
      privateCommon = 'set privateCommon with for each instance';
    }
    // --- </privated>

    // --- <public>
    function init() {
      privateUnique = 1;
    }

    function update() {
      privateUnique++;
    }

    function show() {
      console.log("show :: privateUnique ->  : " + privateUnique);
    }

    function getPrivateUnique() {
      return privateUnique;
    }

    function getPrivateCommon() {
      return privateCommon;
    }
    // --- </public>

    return {
      init: init,
      update : update,
      show: show,
      getPrivateUnique : getPrivateUnique,
      getPrivateCommon : getPrivateCommon
    };

  };

  return api;
  // ********** </UNIQUE FOR INSTANCE>**************************************************************

}());

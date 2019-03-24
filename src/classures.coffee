Classure = ( ->
	## ********** <COMMONS TO ALL INSTANCES> *********************************************************
	## ... put here private methods and variables COMMONS to all instances
	## --- <privated>
	privateCommon = 'example privated common'
	privateCommonFunction  = ->
  	privateCommon = 'set privateCommon'
	## --- </privated>
	## ********** </COMMONS TO ALL INSTANCES> ********************************************************

	## ********** <UNIQUE FOR INSTANCE>***************************************************************
	## ... put here private && publics methods and variables UNIQUES to each instance
 	api = ->
 		## --- <privated>
  	privateUnique
  	privateUniqueFunction ->
   		privateUnique = 'set privateUnique'
   		privateCommon = 'set privateCommon with for each instance'
   	## --- </privated>

   	## --- <public>
  	init ->
   		privateUnique = 1
  	update ->
   		privateUnique++
  	show ->
   		console.log "show :: privateUnique -> : #{ privateUnique}"
  	getPrivateUnique ->
   		privateUnique
  	getPrivateCommon ->
   		privateCommon
   	## --- <public>

  	return {
   		init : init,
   		update : update,
   		show : show,
   		getPrivateUnique : getPrivateUnique,
   		getPrivateCommon : getPrivateCommon
  	}

)()

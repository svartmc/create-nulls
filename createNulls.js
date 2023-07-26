// Create null objects above selected layers for tracking

var currentComp = app.project.activeItem;

var selectedLayers = currentComp.selectedLayers;

if ( selectedLayers.length === 0 ) {

	alert( "No layer selected" );

} else {

	for ( var i = 0; i < selectedLayers.length; i++ ) {

		var selectedDuration = selectedLayers[i].outPoint - selectedLayers[i].inPoint;

		var nullObject = currentComp.layers.addNull( selectedDuration );

		nullObject.startTime = selectedLayers[i].inPoint;

        nullObject.moveBefore( selectedLayers[i] );

        nullObject.name = "TRACKED_" + i;

	}

}
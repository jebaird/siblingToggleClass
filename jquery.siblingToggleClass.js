(function($){
	
	$.fn.siblingsAddClass = function( classNames ){
		return this.siblings.addClass( classNames );
	}
	
	$.fn.siblingsRemoveClass = function( classNames ){
		return this.siblings.removeClass( classNames );
	}
	
	$.fn.siblingsToggleClass = function( classNames ){
		return this.siblings.toggleClass( classNames );
	}
	
})( jQuery )

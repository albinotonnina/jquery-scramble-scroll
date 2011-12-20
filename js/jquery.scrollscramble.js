// by Albino Tonnina
// a.tonnina@numidia.it
// www.numidia.it

(function($) {
    
	function randomize() {
        var rnd = Math.floor(Math.random() * 62);
        if (rnd >= 52) return String.fromCharCode(rnd - 4);
        else if (rnd >= 26) return String.fromCharCode(rnd + 71);
        else return String.fromCharCode(rnd + 65);
    }	
	
 
	 $.fn.scrambled = function() {
       $(this).text($(this).text().replace(/[^\s]/g, randomize));
        
        return $(this).text();
    };
	
		
    $.fn.scrambledFinish = function(text,pretext) {
            var $element = $(this), str = text, progress = 0, replace = /[^\s]/g,
                random = randomize, inc = 3;
            $element.text(pretext);
            var timer = setInterval(function() {
                $element.text(str.substring(0, progress) + str.substring(progress, str.length).replace(replace, random));
                progress += inc
                if (progress >= str.length + inc) clearInterval(timer);
            }, 50);
      
        return this;
    };



$.fn.scramble = function(index, element) {
	this.each(function() {
			var $ele = $(this),text = $ele.text(),pretext;
			
				$(document).bind('scroll', function () {pretext = $ele.scrambled();});
				
        		$(document).bind('scrollstop', function (e) {$ele.scrambledFinish(text,pretext);});
			});
        return this;
        }
		
	
	
	
    
})(jQuery);
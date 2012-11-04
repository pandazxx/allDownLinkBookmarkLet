javascript:(function(){
    var x = document.createElement('SCRIPT');
    x.type = 'text/javascript';
    x.src = 'http://code.jquery.com/jquery-1.8.2.min.js';
    document.getElementsByTagName('head')[0].appendChild(x);

    var d = jQuery('<div id="emuleBookmarkLetDiv" style="border: 6px solid rgb(180, 180, 180); margin: 0px; padding: 0px; position: fixed; background-color: white;OVERFLOW-Y:scroll; z-index: 999; width: 500px; top: 6px; right: 6px;"></div>');
    /*d.prop('style', 'border: 6px solid rgb(180, 180, 180); margin: 0px; padding: 0px; position: fixed; background-color: white; z-index: 0; width: 500px; height: 370px;  top: 6px; right: 6px;');*/
    d.appendTo(jQuery('body'));
    var clipText = "";
    jQuery('a').each(function() {
        if (this.href.search('^ed2k') >= 0)
        {
            var comp = this.href.split("|");
            var filename = this.href;
            if (comp.length >= 3) {
                filename = decodeURI(comp[2]);
            }
            var cb = jQuery('<input type="checkbox">');
            cb.val(this.href);
            d.append(cb);
            d.append('<a href="' + this.href + '">' + filename + '</a>');
            d.append('<br/>');
            clipText += this.href + "\n";
        }
    }
    );

})();

javascript:(function(){
/*
    var y = document.createElement('SCRIPT');
    y.type = 'text/javascript';
    y.src = 'http://mootools.net/download/get/mootools-core-1.4.5-full-compat-yc.js';
    document.getElementsByTagName('head')[0].appendChild(y);
    */
    var x = document.createElement('SCRIPT');
    x.type = 'text/javascript';
    x.src = 'http://code.jquery.com/jquery-1.8.2.min.js';
    document.getElementsByTagName('head')[0].appendChild(x);
    /*
    y = document.createElement('SCRIPT');
    y.type = 'text/javascript';
    y.src = 'https://raw.github.com/pandazxx/allDownLinkBookmarkLet/master/EnybyClipboard.js';
    document.getElementsByTagName('head')[0].appendChild(y);
    */

    var d = jQuery('<div id="emuleBookmarkLetDiv" style="border: 6px solid rgb(180, 180, 180); margin: 0px; padding: 0px; position: fixed; background-color: white;OVERFLOW-Y:scroll; z-index: 100000; width: 500px; height:500px; top: 6px; right: 6px;"></div>');
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
            var cb = jQuery('<input type="checkbox" class="emulelink">');
            cb.val(this.href);
            d.append(cb);
            d.append('<a href="' + this.href + '">' + filename + '</a>');
            d.append('<br/>');
            clipText += this.href + "\n";
        }
    });
    /*
    var enyby_clip = new EnybyClipboard();

    enyby_clip.copyText(clipText);
    */
    var selectAll = jQuery('<input type="checkbox">');
    selectAll.change(function() {
        if (this.checked) {
            /*d.find('input.emulelink').attr('checked', 'true');*/
            d.find('input.emulelink').each(function() {
                this.checked=true;
            });
        } else {
            /*d.find('input.emulelink').removeProp('checked');*/
            d.find('input.emulelink').each(function() {
                this.checked=false;
            });
        }
    });
    d.append(selectAll);
    d.append("<span>SelectAll</span><br/>");
    var copyBtn = jQuery('<input type="button" value="Copy">');
    copyBtn.click(function() {
        var content = "";
        d.find('input.emulelink:checked').each(function() {
            content += $(this).val() + "\n";
        });
        alert(content);
    });

    d.append(copyBtn);

    jQuery('<input type="button" value="close">').click(function() {
        d.remove();
    }).appendTo(d);

    d.append('<br/><br/>');


})();

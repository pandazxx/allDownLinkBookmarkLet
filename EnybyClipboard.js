   function EnybyClipboard() {
        this.saveSelection = false;
        this.callback = false;
        this.pastedText = false;

        this.restoreSelection = function () {
            if (this.saveSelection) {
                window.getSelection().removeAllRanges();
                for (var i = 0; i < this.saveSelection.length; i++) {
                    window.getSelection().addRange(this.saveSelection[i]);
                }
                this.saveSelection = false;
            }
        };

        this.copyText = function (text) {
            var div = document.id('special_copy');
            if (!div) {
                div = new Element('pre', {'id' : 'special_copy', 'style': 'opacity: 0;position: absolute;top: -10000px;right: 0;'});
                div.injectInside(document.body);
            }
            div.set('text', text);
            if (document.createRange) {
                var rng = document.createRange();
                rng.selectNodeContents(div);
                this.saveSelection = [];
                var selection = window.getSelection();
                for (var i = 0; i < selection.rangeCount; i++) {
                    this.saveSelection[i] = selection.getRangeAt(i);
                }
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(rng);
                setTimeout(this.restoreSelection.bind(this), 100);
            } else
                return alert('Copy not work. :(');
        };

        this.getPastedText = function () {
            if (!this.pastedText)
                alert('Nothing to paste. :(');
            return this.pastedText;
        };

        this.pasteText = function (callback) {
            var div = document.id('special_paste');
            if (!div) {
                div = new Element('textarea', {'id' : 'special_paste', 'style': 'opacity: 0;position: absolute;top: -10000px;right: 0;'});
                div.injectInside(document.body);
                div.addEvent('keyup', function() {
                    if (this.callback) {
                        this.pastedText = document.id('special_paste').get('value');
                        this.callback.call(this.pastedText);
                        this.callback = false;
                        this.pastedText = false;
                        setTimeout(this.restoreSelection.bind(this), 100);
                    }
                }.bind(this));
            }
            div.set('value', '');
            if (document.createRange) {
                var rng = document.createRange();
                rng.selectNodeContents(div);
                this.saveSelection = [];
                var selection = window.getSelection();
                for (var i = 0; i < selection.rangeCount; i++) {
                    this.saveSelection[i] = selection.getRangeAt(i);
                }
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(rng);
                div.focus();
                this.callback = callback;
            } else
                return alert('Fail to paste. :(');
        };
    }

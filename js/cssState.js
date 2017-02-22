/*

MIT License

Copyright (c) 2017 KEAtec GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

(function (exports) {
    var setup = function (name,values) {
        var styles = [];
        for (var i in values) {
            styles.push('.cssStateMain.cssStateActive.'+name+'_'+values[i]+'  .cssStateShowWhen.'+name+'_is_'+values[i]
                   +'{display: inherit}'
            )  
            styles.push('.cssStateMain.cssStateActive.'+name+'_'+values[i]+'  .cssStateHideWhen.'+name+'_is_'+values[i]
                   +'{display: none}'
            )  
        };
        $('<style>'+styles.join('\r\n')+'</style>').appendTo($('head'));
    };

    var controller = [];

    var obj = {
        add: function (name,values,def) {
            setup(name,values);
            if (def != undefined) {
                $('.cssStateMain').addClass(''+name+'_'+def);
                $('.cssStateMain').data('css_'+name+'_last',''+name+'_'+def).attr('data-css_'+name+'_last',''+name+'_'+def)
            };
            var controller = [];
            controller.push('<div class="cssStateValue cssStateValue_'+name+'">'+name+'<select name="'+name+'" onchange="cssState.'+name+'(this.value,\''+'Lore Ipsum Data left. Lore Ipsum Data left. Lore Ipsum Data left.'+'\')">');
            for (var i in values) {
                controller.push('<option value="'+values[i]+'">'+values[i]+'</option>')  
            };
            controller.push('</select></div>');
            $(controller.join('')).appendTo($('.cssStateController'));
            obj[name] = function (state,info) {
                if (state == undefined) return $('.cssStateMain').data('css_'+this.name+'_value');
                if (this.values.indexOf(state) < 0) throw new Error('Value '+state+' is not valid for cssState.'+this.name+' '+JSON.stringify(this.values));
                $('.cssStateMain').removeClass($('.cssStateMain').data('css_'+this.name+'_last'));
                $('.cssStateMain').addClass(''+this.name+'_'+state);
                $('.cssStateMain').data('css_'+this.name+'_value',state);
                $('.cssStateMain').data('css_'+this.name+'_last',''+this.name+'_'+state);
                $('.cssStateValue_'+this.name).find('select').val(state);
                if (info != undefined) $('.cssStateMain').find('.cssStateInfo_'+this.name).text(info);
            }.bind({name: name,values: values})
            obj[name](values[0]);
        },
        init: function () {
            $('.cssStateMain').addClass('cssStateActive');
        } 
    };
    exports.cssState = obj;
})(window)
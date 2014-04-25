function Hulk() {

    this.element;

    this.select = function (selector) {
        this.element = document.querySelectorAll(selector);
        return this;
    }

    this.addClass = function(clsNames){
        for(var i = 0,len = this.element.length;i<len;i++){
            this.element[i].className += ' ' + clsNames;
            this.element[i].className = this.element[i].className.replace(/(^\s+|\s+$)/g,'');
        }
    }

    this.append = function(tagName){
        for(var i = 0,len = this.element.length;i<len;i++){
            this.element[i].appendChild(document.createElement(tagName));
        }
    }

    this.attr = function(attrName, value){
        if(value === undefined){
            var arr = [];
            for(var i = 0,len = this.element.length;i<len;i++){
                arr.push(this.element[i].getAttribute(attrName));
            }
            return arr;
        }else{
            for(var i = 0,len = this.element.length;i<len;i++){
                this.element[i].setAttribute(attrName, value);
            }
        }
    }

    this.children = function(){
        return this.element[0].querySelectorAll('*');
    }

    this.css = function(cssAttrName, value){
        if(value === undefined){
            var arr = [];
            for(var i = 0,len = this.element.length;i<len;i++){
                arr.push(this.element[i].style.getPropertyValue(cssAttrName));
            }
            return arr;
        }else{
            for(var i = 0,len = this.element.length;i<len;i++){
                this.element[i].style.setProperty(cssAttrName, value);
            }
        }

    }

    this.empty = function(){
        for(var i = 0,len = this.element.length;i<len;i++){
            this.element[i].innerHTML = '';
        }
    }

    this.find = function(selector){
        var arr = [];
        for(var i = 0,len = this.element.length;i<len;i++){
            var elements = this.element[i].querySelectorAll(selector);
            for(var j = 0, len2 = elements.length;j < len2; j++){
                arr.push(elements[j]);
            }
        }
        return arr;
    }

    this.hasClass = function(className){
        var bool = true;
        for(var i = 0,len = this.element.length;i<len && bool;i++){
            if(className !== this.element[i].className){
                   bool = false;
            }
        }
        if (bool){
            return true;
        }
    }

    this.html = function(){
        return this.element[0].innerHTML;
    }

    this.on = function(eventName, func){
        for(var i = 0,len = this.element.length;i<len;i++){
            this.element[i].addEventListener(eventName, func);
        }
    }

    this.parent = function(){
        return this.element[0].parentNode;
    }

    this.remove = function(){
        for(var i = 0,len = this.element.length;i<len;i++){
            this.element[i].remove();
        }
    }


    this.removeAttr = function(attrName){
        for(var i = 0,len = this.element.length;i<len;i++){
            this.element[i].removeAttribute(attrName);
        }
    }

    this.removeClass = function(){
        for(var i = 0,len = this.element.length;i<len;i++){
            this.element[i].removeAttribute('class');
        }
    }

    this.toggleClass = function(clsNames){
        for(var i = 0,len = this.element.length;i<len;i++){
            if(this.element[i].className.indexOf(clsNames) != -1){
                this.element[i].className = this.element[i].className.replace(clsNames, '');
                this.element[i].className = this.element[i].className.replace(/(^\s+|\s+$)/g,'');
            }else{
                this.element[i].className += ' ' + clsNames;
                this.element[i].className = this.element[i].className.replace(/(^\s+|\s+$)/g,'');
            }
        }
    }

    this.unbind = function(eventName, func){
        for(var i = 0,len = this.element.length;i<len;i++){
            this.element[i].removeEventListener(eventName, func);
        }
    }

    this.wrap = function(tagName){
        for(var i = 0,len = this.element.length;i<len;i++){
            var parent = this.element[i].parentNode;
            var tag = document.createElement(tagName);
            parent.appendChild(tag);
            tag.appendChild(this.element[i]);
        }
    }

}

var hulk = new Hulk();
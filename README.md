NGSwitchery
===========

An AngularJS Directive for [Switchery](http://abpetkov.github.io/switchery/).

##Usage##

1. Include `switchery/dist/switchery[.min].css` from your vendors/components folder in your links.
2. Include `switchery/dist/switchery[.min].js` from your vendors/components folder in your scripts.
3. Include `ng-switchery.js` in your scripts
4. Declare a dependency on the NgSwitchery module
5. Add the `ui-switch` attribute to a checkbox.

##Example##

Declare a dependency on the module
```javascript
angular.module('myModule', ['NgSwitchery']);
```

Insert checkbox html
```html
<input type="checkbox" class="js-switch" ui-switch checked />
```

Setting Options
```html
<input type="checkbox" class="js-switch" ui-switch="{color: '#E43B11', secondaryColor: '#F89279'}" />
```


Bower install
```
bower install ng-switchery
```

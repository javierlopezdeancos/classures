# classures {

## Description

Class javascript with closures patterns.

```javascript
    class = new Class();
```

## Examples

### Example JSBIN

[jsbin example](http://jsbin.com/iZinIqO/20/edit?html,js,output)

### Example create class with method unique and public to each instance

```javascript
    var class = new Class();

    class.init();
    class.update();
```

### Example create class with method unique and public to get propertie unique to each instance

```javascript
    var class = new Class();

	// run class init
    class.init();

	// get private propertie and unique to class instance
    var privateUnique = class.getPrivateUnique();

    // get private propertie and common to all class instance
    var privateCommon = class.getPrivateCommon();
```

## Snippets

Some snippets to use with **visual studio code** with shortcuts `classures` and `classureswithcoffeescript`

# };

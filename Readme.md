
# jQuery Inline Search

Search inline elements using a tiny, fast, and effective jQuery plugin.

## Examples
```html
  <ul class="users">
    <li>Joe</li>
    <li>Bob</li>
    <li>Joey</li>
    <li>Scott</li>
  </ul>
```

The following will hide all users li items
other than Joe and Joey.

```javascript
    $('.users li').search('Joe')
```

The search below will show only Joe since
they are filtered by keyword.

```javascript
    $('.users li').search('Joe', 'by keyword')
```

Joe and Scott will be shown:

```javascript
    $('.users li').search('Joe Scott', 'by keyword')
```
  
Alternatively you may create your own filters, by
using an anonymous function closure, or registering
it with **$.search.filters**.

When the filter returns true the element will be filtered.

```javascript
    $('.users li').search('Bob', function(search){
      return ! $.inArray(this.text().split(' '), search)
    })
```
  
In more complex cases you may need to filter on child elements,
while hiding parent elements when filtered. This is possible using
the _'remove'_ option. The _'remove'_ function is called in context to
the element being filtered on, which in this case is the _'td.first-name'_
so we remove it's parent which will be a _'tr'_, since we would not
want to simply hide the _'td'_.

```javascript
    var parent = function(){ return this.parent() }
    $('table.users td.first-name').search('Tyler', 'by keyword', { remove : parent })
```
 
Lookup functions are also built into Inline Search, so instead of creating parent
like we did above, simply use 'parent'.

```javascript
    $('table.users td.first-name').search('Tyler', 'by keyword', { remove : 'parent' })
```

## Core filters

    - 'by substring' : default
    - 'by keyword'   : entire words
  
## Core lookup functions

    - 'parent' : elements parent

## License 

(The MIT License)

Copyright (c) 2009 TJ Holowaychuk <tj@vision-media.ca>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
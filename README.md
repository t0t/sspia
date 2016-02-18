# SSPIA
Static Single Page Invoice Application that uses only Web Standards (HTML, JavaScript, CSS, [The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)).

# HTML + CSS + Raw JS

I think it's time to reinvent the wheel. There's no need to invent yet another way to do something, just deeping on HTML + CSS + JS.


## Background

Single Page Application

 * One page only, no page loads.
 * Information fetched on the fly using [XMLHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
 * [AJAX](http://en.wikipedia.org/wiki/Ajax_(programming))
 * Related concept: "Server Side Push"
   * [Comet (programming) (also known as Reverse Ajax)](http://en.wikipedia.org/wiki/Comet_(programming)) long polling XMLHTTPRequest
   * [WebSocket](http://en.wikipedia.org/wiki/WebSocket) full-duplex communications channels over a single TCP connection
   * [Socket.io Node.js library for WebSocket](http://socket.io/)
 * [Fragment Identifier](http://en.wikipedia.org/wiki/Fragment_identifier) used for routing
   * `index.html#pageA`
   * `index.html#pageB`

Workflow Review

 * Editor / IDE
   * Atom
 * Git Command Line
   * Running on your machine in same directory as the editor
 * Local Server (e.g. [`python -m SimpleHTTPServer 8080`](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/))
   * This is far better than doing your development over an SSH connection
 * DOM Inspector ([`<p>Hello</p>`](http://jsbin.com/nuduzahoga/1/edit))
 * JavaScript Console ([`console.log("Hello");`](http://jsbin.com/luxiqonefa/1/edit))


Navigation Interface

* Single Page Application
 * A single page with no reload
 * Dynamic behavior added using JavaScript
 * Content fetched as needed
 * Routing:
   * page.js
   * Slowly being replaced by HTML5 History API
 * Routing using [HTML5 History API](http://diveintohtml5.info/history.html)
 * Caching

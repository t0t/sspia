/**
 * XmlHttpRequest for you es6 project. Required features only.
 * Create xhr instance:
 * https://github.com/kysonic/xhr
 * var xhr = new Xhr(opts);
 * xhr.post('http://url.com',{data:123}).then(function(response){...},function(err){...});
 * Options:
 *    withCredentials - Adds cookie and auth data to request. CORS fetures.
 *    contentType - content type header,
 *    json - Handle response as JSON.
 */
class Xhr {

    constructor(opts){
        this.events = {
            READY_STATE_CHANGE: 'readystatechange',
            LOAD_START: 'loadstart',
            PROGRESS: 'progress',
            ABORT: 'abort',
            ERROR: 'error',
            LOAD: 'load',
            TIMEOUT: 'timeout',
            LOAD_END: 'loadend'
        };
        this.opts = opts;
    }

    send(url, method, data){
        return new Promise((resolve,reject)=>{
            var xhr = new XMLHttpRequest();
            var m = method || 'GET';
            xhr.open(m, url);
            // Set headers
            xhr.setRequestHeader('Content-Type', this.opts.contentType || 'application/json');
            // Custom
            if(this.opts.headers) {
                for(var name in this.opts.headers) {
                    var value = this.opts.headers[name];
                    xhr.setRequestHeader(name, value);
                }
            }
            // Transmit credentials
            if(this.opts.withCredentials) xhr.withCredentials = true;
            data = data ? this.parseData(data) : null;

            xhr.addEventListener(this.events.LOAD,  ()=>{
                // ==0 for files.
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status==0) {
                    let responseText = '';
                    if (xhr.responseText) {
                        responseText =  this.opts.json ? JSON.parse(xhr.responseText) : xhr.responseText;
                    }
                    resolve(responseText,xhr);
                } else {
                    reject(this.reject(xhr));
                }
            });
            // Handle basic events
            xhr.addEventListener(this.events.ABORT, ()=>{
                return reject(this.reject(xhr));
            });
            xhr.addEventListener(this.events.ERROR, ()=>{
                return reject(this.reject(xhr));
            });
            xhr.addEventListener(this.events.TIMEOUT, ()=>{
                return reject(this.reject(xhr));
            });

            data?xhr.send(data):xhr.send();
        });
    }

    reject(xhr){
        let responseText = '';
        if (xhr.responseText) {
            responseText =  this.opts.json ? JSON.parse(xhr.responseText) : xhr.responseText;
        }
        return responseText;
    }

    parseData(data){
        // JSON
        if(this.contentType=='application/json') return JSON.stringify(data);
        // Query string
        var query = [];
        if(((typeof data).toLowerCase()=='string') || (typeof data).toLowerCase()=='number') {
            query.push(data);
        } else {
            for (var key in data) {
                query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            }
        }

        return query.join('&');
    }

    get(url){
        return this.send(url);
    }

    post(url,data){
        return this.send(url,'POST',data);
    }

    delete(url) {
        return this.send(url,'DELETE');
    }

    put(url,data) {
        return this.send(url,'PUT',data);
    }
}

export default Xhr;

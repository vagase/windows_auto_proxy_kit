var SOCKET_PROXY = 'SOCKS5 localhost:10000';

var proxy_list = [];
proxy_list.push("google.com");
proxy_list.push("dropbox.com");
proxy_list.push("twitter.com");
proxy_list.push("facebook.com");
proxy_list.push("twitpic.com");
proxy_list.push("googleusercontent.com");
proxy_list.push("googlecode.com");
proxy_list.push("img.ly");
proxy_list.push("ow.ly");
proxy_list.push("t.co");
proxy_list.push("twitbrowser.com");
proxy_list.push("apigee.com");
proxy_list.push("wordpress.com");
proxy_list.push("sugarsync.com");
proxy_list.push("blogspot.com");
proxy_list.push("feedburner.com");
proxy_list.push("amazon.com");
proxy_list.push("git-scm.com");
proxy_list.push("gnufoo.org");
proxy_list.push("mediafire.com");
proxy_list.push("spotify.com");
proxy_list.push("readability.com");
proxy_list.push("thepiratebay.se");
proxy_list.push("bbc.co.uk");
proxy_list.push("vimeo.com");
proxy_list.push("github.com");
proxy_list.push("viidii.com");
proxy_list.push("tttx.biz");
proxy_list.push("youtube.com");
proxy_list.push("sourceforge.net");

function FindProxyForURL(url, host) {    
    for (var i in proxy_list)
        if(shExpMatch(url, '*'+proxy_list[i]+'*'))
            return SOCKET_PROXY;

	return 'DIRECT';
}


function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*vd6.l.qq.com")) {
        return "PROXY 14.103.161.7:3128";
    }
    return "DIRECT";
}

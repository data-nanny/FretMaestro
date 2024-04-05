
function FindProxyForURL(url, host) {
    if (shExpMatch(host, "vd6.l.qq.com")) {
        return "PROXY 121.36.97.115:3128";
    }
    return "DIRECT";
}
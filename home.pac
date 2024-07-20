
function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.qq.com") || shExpMatch(host, "*.music.163.com") || shExpMatch(host, "*.music.126.net")) {
        return "PROXY 121.36.97.115:3128";
    }
    return "DIRECT";
}


function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.qq.com") || shExpMatch(host, "*.163.com") || shExpMatch(host, "*.126.net")) {
        return "PROXY 121.36.97.115:3128";
    }
    #return "DIRECT";
    return "PROXY 121.36.97.115:3128";
}

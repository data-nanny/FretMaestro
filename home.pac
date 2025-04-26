
function FindProxyForURL(url, host) {
    if (shExpMatch(host, "vv.video.qq.com")) {
        return "PROXY 14.103.161.7:3128";
    }
    return "DIRECT";
}

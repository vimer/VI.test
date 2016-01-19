hq_fund.prototype.toLastest = function() { //查看最新净值
    if (!$("gp_gz")) return;
    var imgUrl = $("gp_gz").src.split("Rt")[0];
    var lastStr = imgUrl.substring(imgUrl.length - 1, imgUrl.length);
    if (lastStr != "?" && lastStr != "&") {
        if (imgUrl.indexOf("?") >= 0) {
            imgUrl += "&"
        } else imgUrl += "?"
    }
    $("gp_gz").src = imgUrl + "Rt=" + Math.random();
};

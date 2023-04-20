function remsize(){
    var devicewidth =document.documentElement.clientWidth || window.innerWidth
    if (devicewidth > 750)
    {
        devicewidth = 750
    }
    if (devicewidth<320)
    {
        devicewidth = 320
    }
    document.documentElement.style.fontsize =(devicewidth/7.5)+"px"
    document.querySelector('body').style.fontsize = 0.3+"rem"
}
remsize()
window.onresize = function(){
    remsize()

}
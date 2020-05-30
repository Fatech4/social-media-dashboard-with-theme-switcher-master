
function changetheme(){  
if(document.documentElement.hasAttribute('theme')){
    document.documentElement.removeAttribute('theme');
}else{
    document.documentElement.setAttribute('theme','dark-theme');
}
}  


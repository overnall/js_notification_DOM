var e=function(e,t,i,n,o){var a=document.createElement("div");a.classList.add("notification"),a.classList.add(o);var s=document.createElement("h2");s.classList.add("title"),s.textContent=i,a.appendChild(s);var d=document.createElement("p");d.textContent=n,a.appendChild(d),a.style.position="fixed",a.style.top=e+"px",a.style.right=t+"px",document.body.appendChild(a),setTimeout(function(){document.body.removeChild(a)},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.7ff380fc.js.map

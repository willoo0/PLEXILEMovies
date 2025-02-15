if (/Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent)) {
    if (window.location.pathname !== '/mobile.html') {
        window.location.href = '/mobile.html';
    }

} else {
    if (window.location.pathname === '/mobile.html') {
        window.location.href = '/';  
    }
}
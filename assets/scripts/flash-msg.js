/**
 * Enables "flash" messages to persist their display state. Once user has
 * the close button a cookie is set that ensures the flash is not displayed
 * again.
 */

$( function() {
    var flash = $("#flash-popup");
    var closeBtn = $("#flash-popup-close");
    console.log(closeBtn);
    if ( ! flash ) {
        console.log('Not flash');
        return;
    }
    var id = flash.data('flash-id');
    console.log('id = ' + id);
    var cookieName = 'dd_flash_' + id;
    console.log('cookieName = ' + cookieName);
    closeBtn.on('click', function () {
        console.log('CLICK');
        Cookie.write(cookieName, "dismissed", 3650);
        flash.hide();
    });
    if ( ! Cookie.read(cookieName) ) {
        flash.show();
    }
    else {
        flash.hide();
    }
});

/**
 * Enables "flash" messages to persist their display state. Once user has
 * the close button a cookie is set that ensures the flash is not displayed
 * again.
 */

$( function() {
    var flash = $("#flash-popup");
    var closeBtn = $("#flash-popup-close");
    if ( ! flash ) {
        return;
    }
    var id = flash.data('flash-id');
    var cookieName = 'dd-ddablib--flash-' + id;
    closeBtn.on('click', function () {
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

/**
 * Enables "flash" messages to persist their display state. Once user has
 * the close button a cookie is set that ensures the flash is not displayed
 * again for a year.
 *
 * (C) 2022, Peter Johnson | MIT License | Part of github.com/ddablib/ddablib.github.io
 */

$( function() {
    const flash = $("#flash-popup");
    if ( flash.length === 0 ) {
        // there is no flash message in document: nothing to do
        return;
    }
    var closeBtn = $("#flash-popup-close");
   
    var id = flash.data('flash-id');
    var cookieName = 'dd-ddablib--flash-' + id;
    closeBtn.on('click', function () {
        // set cookie for 1yr: can't set for more per EU regs
        Cookie.set(cookieName, "dismissed", 365);
        flash.hide();
    });
    if ( ! Cookie.isSet(cookieName) ) {
        flash.show();
    }
    else {
        flash.hide();
    }
});

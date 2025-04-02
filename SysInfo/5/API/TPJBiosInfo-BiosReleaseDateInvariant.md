# BiosReleaseDateInvariant method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function BiosReleaseDateInvariant: string;
```

## Description

Returns a string representation of the BIOS' release date in the format that it is stored in the BIOS, regardless of locale.

According to the SMBIOS reference specification the data string **must** be in either `mm/dd/yyyy` or `mm/dd/yy` format. However, this is not checked.

_Returns:_

* A string containing the release date.

    _Special return value:_

    * An empty string is returned if either of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not provide the required information.

## Notes

1. If the returned date is in `mm/dd/yy` format then the year is assumed to be `19yy`.
    
2. If the BIOS supports the SMBIOS reference specification v2.3 or later then the returned date is **required** to be in `mm/dd/yyyy` format.

3. To get the date in a binary format suitable for formatting correctly for any locale, use the [BiosReleaseDate](./TPJBiosInfo-BiosReleaseDate.md) method instead.

## See also

* [BiosReleaseDate](./TPJBiosInfo-BiosReleaseDate.md)

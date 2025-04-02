# BiosReleaseDate method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function BiosReleaseDate: TDate;
```

## Description

Returns the release date of the BIOS.

Use this method to get the release date in a format suitable for formatting correctly for a specific locale.

_Returns:_

* A _TDate_ containing the release date.

    _Special return value:_

    * `0.0` is returned if any of the following conditions apply:
        * the BIOS is not supported;
        * the release date stored in the BIOS is not in the format specified by the SMBIOS reference specification;
        * the BIOS does not provide the required information.

## Note

If the date string is required in exactly the same format as that used in the BIOS then use the _[BiosReleaseDateInvariant](./TPJBiosInfo-BiosReleaseDateInvariant.md)_ method instead.

## See also

* [BiosReleaseDateInvariant](./TPJBiosInfo-BiosReleaseDateInvariant.md)

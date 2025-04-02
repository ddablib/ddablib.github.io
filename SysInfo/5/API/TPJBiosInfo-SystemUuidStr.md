# SystemUuidStr method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemUuidStr(const UseRFC4122ByteOrdering: Boolean = False):
  string;
```

## Description

Returns the BIOS' universal unique ID number (UUID) as a string formatted according to the one of the two formats defined by the SMBIOS reference specification.

The result string is grouped into fields as specified by RFC4122, i.e. in the format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, where each `x` is a hexadecimal digit. The byte order of the digits is determined by the _UseRFC4122ByteOrdering_ parameter.

> Requires support for SMBIOS reference specification v2.1 or later.

**_Parameter:_**

* _UseRFC4122ByteOrdering_ -- Flag that specifies the byte ordering used in the returned string. 

    When `True` the returned string is formatted according to RFC4122, with all bytes in network order.
    
    When `False` (the default) the string is formatted according PC industry practice, with the 1st three fields of the UUID formatted in little endian byte encoding and the remaining fields formatted in network byte order.

_Returns:_

* A string containing the UUID in the required format.

    _Special return values:_

    * An empty string is returned if any of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not specify a UUID;
        * the UUID provided by the BIOS is not 16 bytes long;
        * the BIOS does not support the SMBIOS reference specification v2.1 or later.
    * A string where all hex digits are `0` is returned when the system has no UUID present.
    * A string where all hex digits are `F` is returned when no UUID is currently present, but one could be set in future.

## See also

* [SystemUuid](./TPJBiosInfo-SystemUuid.md)
* [SystemUuidRaw](./TPJBiosInfo-SystemUuidRaw.md)

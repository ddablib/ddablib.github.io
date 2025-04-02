# TPJBiosWakeupType

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Applies to:** ~>5.32

This is an enumerated type that provides information about how a computer was powered on.

The meaning of the different values are as follows:

| Value | Power-on reason |
|:------|:----------------|
| _wutReserved_ | Value reserved by SMBIOS reference specification |
| _wutOther_ | Other, unspecified reason |
| _wutUnknown_ | Unknown reason | 
| _wutAPMTimer_ | Advanced power management timer event |
| _wutModemRing_ | Wake-on-modem or wake-on-ring event |
| _wutLANRemote_ | Wake-on-LAN (WoL) event |
| _wutPowerSwitch_ | Computer power switch turned on |
| _wutPCIPME_ | PCI power management event |
| _wutACPowerRestored_ | Automatically switched on after AC power restored |

A value of this type is returned by the _[TPJBiosInfo.SystemWakeupType](./TPJBiosInfo-SystemWakeupType.md)_ method.

# Delphi RTL types used by _TArrayUtils_

**Project:** [Array Utilities Unit](../API.md)

**Applies to:** ~>0.1

This page contains brief descriptions of the Delphi run time library types used by _TArrayUtils_ methods.

## Function references

### _TComparison\<T\>_ function reference

**Unit:** _System.Generics.Defaults_

```pascal
type
    TComparison<T> = reference to function(const Left, Right: T): Integer;
```

A function of this type can be passed to various _TArrayUtils_ methods that compare values of type _T_.

The function must be implemented to return `0` if _Left_ = _Right_, a negative value if _Left_ \< _Right_ and a positive value if _Left_ \> _Right_.

### _TEqualityComparison\<T\>_ function reference

**Unit:** _System.Generics.Defaults_

```pascal
type
    TEqualityComparison<T> = reference to function(const Left, Right: T): Boolean;
```

A function of this type can be passed to various _TArrayUtils_ methods that test values of type _T_ for equality.

The function  must be implemented to return `True` if _Left_ = _Right_ or `False` if _Left_ ≠ _Right_.

## Interfaces

### _IComparer\<T\>_ interface

**Unit:** _System.Generics.Defaults_

```pascal
type
  IComparer<T> = interface
    function Compare(const Left, Right: T): Integer;
  end;
```

An instance of an object supporting this interface can be passed to various _TArrayUtils_ methods that compare values of type _T_.

The _Compare_ method must be implemented to return `0` if _Left_ = _Right_, a negative value if _Left_ \< _Right_ and a positive value if _Left_ \> _Right_.

### _IEqualityComparer\<T\>_ interface

**Unit:** _System.Generics.Defaults_

```pascal
type
  IEqualityComparer<T> = interface
    function Equals(const Left, Right: T): Boolean;
    function GetHashCode(const Value: T): Integer;
  end;  
```
An instance of an object supporting this interface can be passed to various _TArrayUtils_ methods that test values of type _T_ for equality.

The _Equals_ method must be implemented to return `True` if _Left_ = _Right_ or `False` if _Left_ ≠ _Right_.

The _Hash_ method is not used by any _TArrayUtils_ method, and so the quality of the returned hash code does not matter. In circumstances where it is certain that the _Hash_ method will never be called then `0` can be returned.

## Methods

### _TComparer\<T\>.Default_ class method

**Unit:** _System.Generics.Defaults_

```pascal
class function TComparer<T>.Default: IComparer<T>;  
```

This method returns an instance of the default comparer for type _T_.

It is used by _TArrayUtils_ whenever an optional comparer object or function is not provided by the user.

### _TEqualityComparer\<T\>.Default_ class method

**Unit:** _System.Generics.Defaults_

```pascal
class function TEqualityComparer<T>.Default: IEqualityComparer<T>;  
```

This method returns an instance of the default equality comparer for type _T_.

It is used by _TArrayUtils_ whenever an optional equality comparer object or function is not provided by the user.

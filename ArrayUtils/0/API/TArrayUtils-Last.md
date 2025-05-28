# _Last\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Last<T>(const A: array of T): T;
  static;
```

## Description

Returns the last element of a non-empty array.

***Parameters:***

* _A_ - The array on which to operate.

***Returns:***

* The required last element.

***Precondition:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Example

```pascal
procedure Last_Eg;
var
  A: TArray<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3);
  Assert(TArrayUtils.Last<Integer>(A) = 3);
end;
```

## See Also

* [_First\<T\>_](./TArrayUtils-First.md)

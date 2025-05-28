# _First\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function First<T>(const A: array of T): T;
  static;
```

## Description

Returns the first element of a non-empty array.

***Parameters:***

* _A_ - The array on which to operate.

***Returns:***

* The required first element.

***Precondition:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Example

```pascal
procedure First_Eg;
var
  A: TArray<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3);
  Assert(TArrayUtils.First<Integer>(A) = 1);
end;
```

## See Also

* [_Last\<T\>_](./TArrayUtils-Last.md)

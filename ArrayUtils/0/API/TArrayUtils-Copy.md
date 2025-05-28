# _Copy\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TCloner<T> = reference to function (const AElem: T): T;

class function Copy<T>(const A: array of T): TArray<T>;
  overload; static;

class function Copy<T>(const A: array of T;
  const ACloner: TCloner<T>): TArray<T>;
  overload; static;
```

## Description

Returns a copy of a given array.

The two overloaded methods enable either a shallow copy or a deep copy to be returned. 

***Parameters:***

* _A_ - The array to be copied.

* _ACloner_ - An optional callback function that must create and return a deep copy of a given element of _A_.

    ***Parameter:***

    * _AElem_ - The element to be cloned.

    ***Returns:***
  
    * The cloned copy of _AElem_.

    If this parameter is omitted then a shallow copy of _A_ is returned.

    When the parameter is provided then a deep copy of _A_ is returned. Here, a deep copy is a copy whose properties do not share the same references (i.e. point to the same underlying values) as those of the source item. For simple types this is trivial. For reference types this means that _ACloner_ must create fresh data objects with the same properties as the type being cloned. 

***Returns:***

* The required copy of the array.

## Note

When making deep copies that involve allocating memory, particular care must be taken to ensure that the memory is deallocated when no longer required.

## Examples

### Example #1

Creating a shallow copy:

```pascal
procedure Copy_Eg1;
var
  A, B: TArray<Integer>;
  C, D: TArray<TStrings>;
  O1, O2, O3: TStrings;
  Idx: Integer;
begin
  A := TArray<Integer>.Create(1, 2, 3);
  B := TArrayUtils.Copy<Integer>(A);
  Assert(TArrayUtils.Equal<Integer>(A, B));

  O1 := TStringList.Create;
  O2 := TStringList.Create;
  O3 := TStringList.Create;
  O1.Add('a');
  O2.Add('b'); O2.Add('c');
  O3.Add('d');

  C := TArray<TStrings>.Create(O1, O2, O3);
  D := TArrayUtils.Copy<TStrings>(C);

  for Idx := Low(C) to High(C) do
    // these array elements refer to the same object references
    Assert(Pointer(C[Idx]) = Pointer(D[Idx]));

  Assert(D[0].Text = C[0].Text);
  C[0].Add('x');    // also updates D[0];
  Assert(D[0].Text = C[0].Text);

  for Idx := Low(C) to High(C) do
    C[Idx].Free;    // also frees D[Idx]
end;
```

### Example #2

Creating a deep copy:

```pascal
procedure Copy_Eg2;
var
  C, D: TArray<TStrings>;
  O1, O2, O3: TStrings;
  Idx: Integer;
  Cloner: TArrayUtils.TCloner<TStrings>;
begin
  O1 := TStringList.Create;
  O2 := TStringList.Create;
  O3 := TStringList.Create;
  O1.Add('a');
  O2.Add('b'); O2.Add('c');
  O3.Add('d');

  Cloner := function(const AElem: TStrings): TStrings
    var
      S: string;
    begin
      Result := TStringList.Create;
      for S in AElem do
        Result.Add(S);
    end;

  C := TArray<TStrings>.Create(O1, O2, O3);
  D := TArrayUtils.Copy<TStrings>(C, Cloner);

  for Idx := Low(C) to High(C) do
    // these array elements refer to different object references
    Assert(Pointer(C[Idx]) <> Pointer(D[Idx]));

  Assert(D[0].Text = C[0].Text);
  C[0].Add('x');    // does not update D[0];
  Assert(D[0].Text <> C[0].Text);

  for Idx := Low(C) to High(C) do
    C[Idx].Free;
  for Idx := Low(D) to High(D) do
    D[Idx].Free;    // these are separate objects to those in C
end;
```

## See Also

* [_CopyReversed\<T\>_](./TArrayUtils-CopyReversed.md)
* [_CopySorted\<T\>_](./TArrayUtils-CopySorted.md)
* [_Pick\<T\>_](./TArrayUtils-Pick.md)
* [_Slice\<T\>_](./TArrayUtils-Slice.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_Concat\<T\>_](./TArrayUtils-Concat.md)

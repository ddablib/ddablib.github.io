# _TArrayUtils_ record

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Applies to:** ~>0.1

## Description

_TArrayUtils_ is an advanced record that provides a container for numerous static generic methods that perform useful operations on arrays.

_TArrayUtils_ contains no data and should never be instantiated.

### Methods

_TArrayUtils_ defines numerous static class methods. All methods are generic.

| Method | Description |
|:-------|:------------|
| [_Chop\<T\>_](./TArrayUtils-Chop.md) | Removes a range of elements from an array and returns those elements. |
| [_Compare\<T\>_](./TArrayUtils-Compare.md) | Compares two arrays. |
| [_Concat\<T\>_](./TArrayUtils-Concat.md) | Concatenates two arrays. |
| [_Contains\<T\>_](./TArrayUtils-Contains.md) | Checks if an element is contained in an array. |
| [_Copy\<T\>_](./TArrayUtils-Copy.md) | Returns a copy of an array. |
| [_CopyReversed\<T\>_](./TArrayUtils-CopyReversed.md) | Returns a reversed copy of an array. |
| [_CopySorted\<T\>_](./TArrayUtils-CopySorted.md) | Returns a sorted copy of an array. |
| [_DeDup\<T\>_](./TArrayUtils-DeDup.md) | Returns a copy of an array with no duplicated elements. |
| [_Delete\<T\>_](./TArrayUtils-Delete.md) | Deletes one or more elements from an array. |
| [_DeleteAndFree\<T:class\>_](./TArrayUtils-DeleteAndFree.md) | Deletes and frees one or more elements from an array of objects. |
| [_DeleteAndFreeRange\<T:class\>_](./TArrayUtils-DeleteAndFreeRange.md) | Deletes and frees a range of elements from an array of objects. |
| [_DeleteAndRelease\<T\>_](./TArrayUtils-DeleteAndRelease.md) | Deletes one or more elements from an array and releases any resources associated with the deleted elements. |
| [_DeleteAndReleaseRange\<T\>_](./TArrayUtils-DeleteAndReleaseRange.md) | Deletes a range of elements from an array and releases any resources associated with the deleted elements. |
| [_DeleteRange\<T\>_](./TArrayUtils-DeleteRange.md) | Deletes a range of elements from an array. |
| [_Equal\<T\>_](./TArrayUtils-Equal.md) | Checks if two arrays are equal. |
| [_EqualStart\<T\>_](./TArrayUtils-EqualStart.md) | Checks if a specified number of elements at the start of an array are equal. |
| [_Every\<T\>_](./TArrayUtils-Every.md) | Checks if all elements of an array satisfy given criteria. |
| [_FindAll\<T\>_](./TArrayUtils-FindAll.md) | Finds all the elements in an array that satisfy given criteria. |
| [_FindAllIndices\<T\>_](./TArrayUtils-FindAllIndices.md) | Finds the indices of all the elements in an array that satisfy given criteria. |
| [_FindDef\<T\>_](./TArrayUtils-FindDef.md) | Finds the first element in an array that satisfies given criteria or returns a default value if there is no matching value. |
| [_FindIndex\<T\>_](./TArrayUtils-FindIndex.md) | Finds the index of the first element in an array that satisfies given criteria. |
| [_FindLastDef\<T\>_](./TArrayUtils-FindLastDef.md) | Finds the last element in an array that satisfies given criteria or a returns default value if there is no matching value. |
| [_FindLastIndex\<T\>_](./TArrayUtils-FindLastIndex.md) | Finds the index of the last element in an array that satisfies given criteria. |
| [_First\<T\>_](./TArrayUtils-First.md) | Returns the first element of an array. |
| [_ForEach\<T\>_](./TArrayUtils-ForEach.md) | Calls a given procedure for every element of an array. |
| [_IndexOf\<T\>_](./TArrayUtils-IndexOf.md) | Returns the first index of an element in an array that is equal to a given value. |
| [_IndicesOf\<T\>_](./TArrayUtils-IndicesOf.md) | Returns an array of indices of all elements of an array that are equal to a given value. |
| [_Insert\<T\>_](./TArrayUtils-Insert.md) | Inserts an element into an array at a given index. |
| [_Last\<T\>_](./TArrayUtils-Last.md) | Returns the last element of an array. |
| [_LastIndexOf\<T\>_](./TArrayUtils-LastIndexOf.md) | Returns the last index of an element in an array that is equal to a given value. |
| [_Max\<T\>_](./TArrayUtils-Max.md) | Finds the maximum value of all elements in an array. |
| [_Min\<T\>_](./TArrayUtils-Min.md) | Finds the minimum value of all elements in an array. |
| [_MinMax\<T\>_](./TArrayUtils-MinMax.md) | Finds the minimum and maximum values of all elements in an array. |
| [_OccurrencesOf\<T\>_](./TArrayUtils-OccurrencesOf.md) | Counts the number of occurrences of an element in an array. |
| [_Pick\<T\>_](./TArrayUtils-Pick.md) | Returns the elements at selected indices in an array. |
| [_Pop\<T\>_](./TArrayUtils-Pop.md) | Removes and returns the last element of an array. |
| [_PopAndFree\<T:class\>_](./TArrayUtils-PopAndFree.md) | Removes and frees the last element of an array of objects. |
| [_PopAndRelease\<T\>_](./TArrayUtils-PopAndRelease.md) | Removes the last element of an array and releases any resource associated with the removed element. |
| [_Push\<T\>_](./TArrayUtils-Push.md) | Adds a given element to the end of an array. |
| [_Reduce\<T\>_](./TArrayUtils-Reduce_OneType.md) | Reduces the elements of an array to a single value that has the same type as the array elements. |
| [_Reduce\<TIn,Tout\>_](./TArrayUtils-Reduce_TwoTypes.md) | Reduces the elements of an array to a single value that has a different type to that of the array elements. |
| [_Reverse\<T\>_](./TArrayUtils-Reverse.md) | Reverses the order of elements in an array. |
| [_Shift\<T\>_](./TArrayUtils-Shift.md) | Removes and returns the first element of an array. |
| [_ShiftAndFree\<T:class\>_](./TArrayUtils-ShiftAndFree.md) | Removes and frees the first element of an array of objects. |
| [_ShiftAndRelease\<T\>_](./TArrayUtils-ShiftAndRelease.md) | Removes the last element of an array and releases any resource associated with the removed element. |
| [_Slice\<T\>_](./TArrayUtils-Slice.md) | Returns a contiguous range of elements of an array. |
| [_Some\<T\>_](./TArrayUtils-Some.md) | Checks if at least one element of an array satisfies given criteria. |
| [_Sort\<T\>_](./TArrayUtils-Sort.md) | Sorts an array. |
| [_Transform\<TIn,TOut\>_](./TArrayUtils-Transform.md) | Transforms an array with elements of one type into another array with elements of an optionally different type. |
| [_TryFind\<T\>_](./TArrayUtils-TryFind.md) | Attempts to find the first element in an array that satisfies given criteria. |
| [_TryFindLast\<T\>_](./TArrayUtils-TryFindLast.md) | Attempts to find the last element in an array that satisfies given criteria. |
| [_UnShift\<T\>_](./TArrayUtils-UnShift.md) | Inserts an element at the start of an array. |

### Types

Several inner types are defined. All define callbacks.

The usage of these functions and procedures is explained on the pages relating to the _TArrayUtils_ methods that use them.

| Type | Description |
|:-----|:------------|
| _TCallback\<T\>_ and _TCallbackEx\<T\>_ | Reference to a procedure called iteratively by different overloaded versions of the [_ForEach\<T\>_](./TArrayUtils-ForEach.md) method. Procedures of type _TCallback\<T\>_ are also called by methods that release a resource associated with array elements. |
| _TCloner\<T\>_ | Reference to a function that creates a deep copy of a given value. Called iteratively by the overloaded version of the [_Copy\<T\>_](./TArrayUtils-Copy.md) method that makes a deep copy of an array. |
| _TConstraint\<T\>_ and  _TConstraintEx\<T\>_ | References to predicate functions that are called iteratively by various methods when searching or testing the elements of an array. |
| _TReducer\<T\>_ and  _TReducerEx\<T\>_ | Reference to a function called iteratively by different overloaded versions of the [_Reduce\<T\>_](./TArrayUtils-Reduce_OneType.md) method. |
| _TReducer\<TIn,TOut\>_ and  _TReducerEx\<TIn,TOut\>_ | Reference to a function called iteratively by different overloaded versions of the [_Reduce\<TIn,TOut\>_](./TArrayUtils-Reduce_TwoTypes.md) method. |
| _TTransformer\<TIn,TOut\>_ and _TTransformerEx\<TIn,TOut\>_ | References to functions called iteratively by different overloaded versions of the [_Transform\<TIn,TOut\>_](./TArrayUtils-Transform.md) method. |

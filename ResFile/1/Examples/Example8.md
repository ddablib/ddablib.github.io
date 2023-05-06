# Example #8: Deleting resources

We can delete all resources from a resource file simply by calling the _[Clear](../API/TPJResourceFile-Clear.md)_ method of _[TPJResourceFile](../API/TPJResourceFile.md)_. In addition to deleting the resources _[Clear](../API/TPJResourceFile-Clear.md)_ also frees all the _[TPJResourceEntry](../API/TPJResourceEntry.md)_ instances.

```pascal
var
  ResFile: TPJResourceFile;
begin
  ...
  // Assume ResFile is a valid resource file object
  ...
  // Delete all resources and free them
  ResFile.Clear;
  ...
end;
```

A single resource can be removed from the resource file using the _[TPJResourceFile.DeleteEntry](../API/TPJResourceFile-DeleteEntry.md)_ method. This checks if the resource file contains the resource and removes it from the file if so. However, the resource entry object **is not freed**. While this behaviour may be useful at times, it is not recommended for geral use. The preferred method is simply to free the resource entry instance. Freeing a _[TPJResourceEntry](../API/TPJResourceEntry.md)_ object automatically removes it from the resource file.

So, to remove a single resource, _ResEntry_, from the resource file use the following code:

```pascal
var
  Entry: TPJResourceEntry;
begin
  ...
  // Assume ResEntry references a valid object
  ...
  // Delete the object from its resource file and free it
  Entry.Free;
  ...
end;
```

**Links:**

  * [Next Example](./Example9.md)
  * [Previous Example](./Example7.md)
  * Back to [List of Examples](../Examples.md)
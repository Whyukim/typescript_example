{
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("value is null");
    }
    return arg;
  }

  const num = checkNotNull<number>(123);
  const str: string = checkNotNull("hello");
}

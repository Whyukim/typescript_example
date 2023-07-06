{
  type PageInfo = {
    title: string;
  };
  type Page = "a" | "b" | "c";

  const nav: Record<Page, PageInfo> = {
    a: { title: "a" },
    b: { title: "b" },
    c: { title: "c" },
  };
}

{
  // map type
  type Video = {
    title: string;
    author: string;
  };

  // Optional로 바꾸는 예시
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in => [] 괄호는 for in문하고 같음
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  // Readonly로 바꾸는 예시
  animal.name = "cat"; // 여기서는 수정가능
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  const video: ReadOnly<Video> = {
    title: "hi",
    author: "title",
  };
  video.title = "hello"; // 여기서는 수정불가

  // 💩 일일이 다 만들어줘야함,,,;
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "HELLO",
    author: null,
  };

  //선언
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  type ProxyWrapperFn = <T>(value: T) => Proxy<T>;
  //구현
  const wrapperProxy: ProxyWrapperFn = (value) => {
    let _value = value;
    return {
      get: () => _value,
      set: (value) => {
        _value = value;
      },
    };
  };
  const videoProxy: Proxify<Video> = {
    title: wrapperProxy("영상제목"),
    author: wrapperProxy("영상 제작자"),
  };
  console.log(videoProxy.title.get()); // 영상제목
  console.log(videoProxy.author.get()); // 영상제작자
  videoProxy.title.set("영상제목수정");
  console.log(videoProxy.title.get()); // 영상제목수정
}

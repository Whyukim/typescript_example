{
  // type에서 타입 제거
  type Video = {
    title: string;
    description: string;
    lael: string;
    arrow: "up" | "down" | "left" | "right";
  };
  type VidioMeta = Omit<Video, "lael" | "description">;

  function getVidio(title: string): Video {
    return {
      title,
      description: "vidio",
      lael: "vid",
      arrow: "up",
    };
  }

  function getVidioMetaData(title: string): VidioMeta {
    return {
      title,
      arrow: "down",
    };
  }
}

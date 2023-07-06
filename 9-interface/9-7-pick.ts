{
  // type중 선택
  type Video = {
    title: string;
    description: string;
    lael: string;
    arrow: "up" | "down" | "left" | "right";
  };
  type VidioMeta = Pick<Video, "title" | "arrow">;

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

{
  type LodingState = {
    state: "loading";
  };
  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LodingState | SuccessState | FailState;

  function printLoginState(load: ResourceLoadState) {
    switch (load.state) {
      case "loading":
        return console.log("loading...");
      case "success":
        return console.log(load.response.body);
      case "fail":
        return console.log(load.reason);
      default:
        throw new Error("no data");
    }
  }

  printLoginState({ state: "loading" });
  printLoginState({ state: "success", response: { body: "loaded" } });
  printLoginState({ state: "fail", reason: "no network" });
}

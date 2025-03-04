export const getData = async (param: string) => {
  try {
    if (param === "") {
      param = "beirut";
    }
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${param}?key=UTU8CRDT588YC9HK3GYLM5RNE`,
      { mode: "cors" }
    );

    return response;
  } catch (error) {
    console.error(`Response Error: ${error}`);
  }
};

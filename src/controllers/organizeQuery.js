const organizeQuery = (queryArr) => {
  let tag = [];
  let status = [];
  let type = [];
  let area = [];
  let location = [];
  let rooms = [];
  let bedrooms = [];
  let bathrooms = [];
  let price = [];
  queryArr.forEach((query) => {
    if (query.includes("checkedtag")) {
      tag.push(query.substr(10));
    } else if (query.includes("checkedfor")) {
      status.push(query.substr(10));
    } else if (
      query.includes("residential") ||
      query.includes("commercial") ||
      query.includes("land") ||
      query.includes("luxury")
    ) {
      type.push(query.substr(7));
    } else if (query.includes("checkedareafrom")) {
      area.push(parseInt(query.replace(/^\D+/g, "")));
    } else if (query.includes("checkedrooms")) {
      rooms.push(parseInt(query.replace(/^\D+/g, "")));
    } else if (query.includes("checkedbedrooms")) {
      bedrooms.push(parseInt(query.replace(/^\D+/g, "")));
    } else if (query.includes("checkedbathrooms")) {
      bathrooms.push(parseInt(query.replace(/^\D+/g, "")));
    } else if (query.includes("checkedpricemin")) {
      price.push(parseInt(query.replace(/^\D+/g, "")));
    } else if (query.includes("checkedpricemax")) {
      let max = parseInt(query.replace(/^\D+/g, ""));
      let value = price[0];
      while (value <= max) {
        price.push(value);
        value += 100000;
      }
    } else if (query.includes("checked")) {
      location.push(query.substr(7));
    }
  });

  const queryObj = [
    { tag },
    { status },
    { type },
    { area },
    { location },
    { rooms },
    { bedrooms },
    { bathrooms },
    { price },
  ];

  // console.log(queryObj);

  const mongoQuery = queryObj.filter((query) => {
    return query[Object.keys(query)[0]].length > 0;
  });

  return mongoQuery;
};

export default organizeQuery;

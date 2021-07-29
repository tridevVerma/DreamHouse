import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import HeadsetIcon from "@material-ui/icons/Headset";
import ScheduleIcon from "@material-ui/icons/Schedule";

export const contactLinks = [
  {
    icon: (
      <LocationOnIcon style={{ fontSize: "1.4rem", marginRight: "1rem" }} />
    ),
    text: "214 West Arnold St. New York, NY 10002",
  },

  {
    icon: <PhoneIcon style={{ fontSize: "1.4rem", marginRight: "1rem" }} />,
    text: "(123) 345-6789",
  },

  {
    icon: <PhoneIcon style={{ fontSize: "1.4rem", marginRight: "1rem" }} />,
    text: "(+100) 123 456 7890",
  },

  {
    icon: <HeadsetIcon style={{ fontSize: "1.4rem", marginRight: "1rem" }} />,
    text: "support@realvilla.demo",
  },

  {
    icon: <ScheduleIcon style={{ fontSize: "1.4rem", marginRight: "1rem" }} />,
    text: "Mon - Sun / 9:00AM - 8:00PM",
  },
];

export const quickLinks = [
  "commercial",
  "business",
  "house",
  "residential",
  "residential tower",
  "beverly hills",
  "los angeles",
  "the beach",
  "property listing",
  "classic",
  "modern home",
  "luxury",
  "beach pasadena",
];

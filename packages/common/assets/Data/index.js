import { useTranslation } from "react-i18next";

const { t } = useTranslation();
export const screens = [
  {
    id: 0,
    image: require("../images/Rectangle.png"),
    heading: "Amet minim mollit non",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
  },
  {
    id: 1,
    image: require("../images/Rectangle.png"),
    heading: "Amet minim mollit non",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
  },
  {
    id: 2,
    image: require("../images/Rectangle.png"),
    heading: "Amet minim mollit non",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
  },
  {
    id: 3,
    image: require("../images/Rectangle.png"),
    heading: "Amet minim mollit non",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
  },
];

export const days = [
  t("EveryDay"),
  t("Thursday"),
  t("Monday"),
  t("Friday"),
  t("Tuesday"),
  t("Saturday"),
  t("Wednesday"),
  t("Sunday"),
];

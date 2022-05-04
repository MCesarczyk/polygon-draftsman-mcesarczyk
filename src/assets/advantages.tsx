import { ReactNode } from "react";
import { ReactComponent as DataLib } from "../assets/graphics/data_lib.svg";
import { ReactComponent as Intelligence } from "../assets/graphics/diy_ai.svg";
import { ReactComponent as Environment } from "../assets/graphics/social_env.svg";
import { ReactComponent as Productivity } from "../assets/graphics/increase_prod.svg";

type item = {
  id: number,
  icon: ReactNode,
  title: string,
  text: string
}

export const advantages: item[] = [
  {
    id: 1,
    icon: <DataLib />,
    title: "Data Library",
    text: "Cleaned, centralized public, paid & proprietary data. Satellite data provided by multipe providers. Machine data accesses through OEM systems. Other data sourced from various paid and free databases."
  },
  {
    id: 2,
    icon: <Intelligence />,
    title: "Do It Yourself AI",
    text: "Test hypotheses and map mines to detect potential hazards (e.g. Natural) and ensure that businesses do not affect protected areas. Monitor and optimize the use of natural resources such as soil and water during mining operations."
  },
  {
    id: 3,
    icon: <Environment />,
    title: "Social and Environmental Impact",
    text: "Monitor the environmental impact of extraction, satellite imagery detecting deforestation, groundwater contamination. Data also play a role in enhancing the mine closure process including land rehabilitation and geospatial and vegetation management."
  },
  {
    id: 4,
    icon: <Productivity />,
    title: "Increase Productibity",
    text: "Monitor the transportation of goods around the site. This is especially useful in conjunction with shipping containers equipped with sensors for monitoring and tracking. Improve freight routes and geotagging data, e.g. From mining equipment, agricultural sensors, and oil and gas machinery."
  }
]
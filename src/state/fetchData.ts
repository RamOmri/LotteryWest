import { ProductContent } from "../screens";

export default function fetchData(): ProductContent[] {
  return [
    {
      id: 1,
      images: [
        require("../../assets/product_images/house1_1.png"),
        require("../../assets/product_images/house1_2.png"),
      ],
      title: "House number 1",
      variants: [
        {
          description: "House with no pool.",
          price: 5000,
        },
        {
          description: "House with pool.",
          price: 10000,
        },
      ],
    },
    {
      id: 2,
      images: [
        require("../../assets/product_images/house2_1.png"),
        require("../../assets/product_images/house2_2.png"),
      ],
      title: "House number 2",
      variants: [
        {
          description: "House with roommates.",
          price: 100,
        },
        {
          description: "House all to yourself.",
          price: 1000,
        },
      ],
    },
    {
      id: 3,
      images: [
        require("../../assets/product_images/house3_1.png"),
        require("../../assets/product_images/house3_2.png"),
      ],
      title: "House number 3",
      variants: [
        {
          description:
            "You buy the house, but can only live in the house during weekdays.",
          price: 5000,
        },
        {
          description: "You may use the house on weekends.",
          price: 12345,
        },
      ],
    },
  ];
}

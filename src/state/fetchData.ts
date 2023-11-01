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
          description:
            "Welcome to your future home! While it may not have the most square footage or the latest appliances, it's full of character and... potential. It's perfect for those who love a good DIY project (or ten). Bonus: The creaky floorboards will ensure you always know when your in-laws are coming!",
          price: 5000,
        },
        {
          description:
            "Introducing the 'Palace of Possibility'! This cozy abode might not have a throne room, but it has a chair in the corner that's pretty comfortable. Forget about a grand ballroom; our dance floor is wherever you decide to put your boombox. With windows that almost all have views and a roof that mostly doesn't leak, you'll feel like royalty in no time. Your kingdom awaits!",
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

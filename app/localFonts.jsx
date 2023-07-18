import localFont from "next/font/local"

export const chakra_petch = localFont({
  preload: "true",
  src: [
    {
      path: "../public/fonts/Chakra_Petch/ChakraPetch-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Chakra_Petch/ChakraPetch-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Chakra_Petch/ChakraPetch-SemiBold.ttf",
      weight: "700",
    }
  ],
});

export const indie_flower = localFont({
  preload: "true",
  src: [
    {
      path: "../public/fonts/Indie_Flower/IndieFlower-Regular.ttf",
      weight: "400",
    },
  ]
});

export const quicksand = localFont({
  preload: "true",
  src: [
    {
      path: "../public/fonts/Quicksand/Quicksand-VariableFont_wght.ttf",
    }
  ]
})
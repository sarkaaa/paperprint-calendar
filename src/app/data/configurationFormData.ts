export const structureFileds = [
  {
    title: "Weekly",
    id: "weekly",
    name: "type",
    value: "weekly",
  },
  // {
  //   title: "Monthly",
  //   id: "monthly",
  //   name: "type",
  //   value: "monthly",
  // }
]

export const themeFields = [
  {
    title: "Classic",
    id: "classic",
    name: "theme",
    value: "classic",
    example: 'themeExampleClassic'
  },
  {
    title: "Minimalism",
    id: "minimalism",
    name: "theme",
    value: "minimalism",
    example: "themeExampleMinimalism"
  }
]

export const canvasFields = [
  {
    title: "Lines",
    id: "lines",
    name: "canvas",
    value: "lines",
    example: "canvasExampleLines"
  },
  {
    title: "Dots",
    id: "dots",
    name: "canvas",
    value: "dots",
    example: "canvasExampleDots"
  },
  {
    title: "Empty",
    id: "empty",
    name: "canvas",
    value: "empty",
    example: "canvasExampleEmpty"
  }
]

export const colorFields = [
  {
    title: "Black and white",
    id: "blackAndWhite",
    name: "color",
    value: "blackAndWhite"
  },
  {
    title: "Red",
    id: "red",
    name: "color",
    value: "red"
  },
  {
    title: "Blue",
    id: "blue",
    name: "color",
    value: "blue"
  },
  {
    title: "Green",
    id: "green",
    name: "color",
    value: "green"
  }
]

/**
* @description Canvas backgrounds Tailwind classes.
*/
export const CANVAS_BACKGROUNDS: { [key: string]: string } = {
  lines: "w-full bg-[length:25px_25px] lines",
  dots: "w-full bg-[length:15px_15px] dots",
  empty: "bg-transparent",
};

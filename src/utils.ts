const makeHashText = (text: string) =>
  text
    .split(",")
    .map((t) => `#${t.trim().replaceAll(" ", "")}`)
    .join(" ");

const makeRegularText = (text: string) =>
  text
    .split(" ")
    .map(
      (t = "") =>
        `${t.trim().split(/(?=[A-Z])/).join(" ").trim().replaceAll("#", "")}`,
    )
    .join(", ");

export const textConverter = (text: string) => {
  let finalText = "";

  if (text.trim() === "") {
    return "";
  }

  if (text.includes("#")) {
    finalText = makeRegularText(text);
  } else {
    finalText = makeHashText(text);
  }

  return finalText;
};

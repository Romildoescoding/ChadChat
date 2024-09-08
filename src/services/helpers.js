export function formatTime(time) {
  const createdAt = new Date(time);

  // Convert the timestamp to formatted time string
  const formattedTime = createdAt.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return formattedTime;
}

export function getDate(inputDate) {
  const days = [
    "January",
    "Febrauary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(inputDate);
  return date.getDate() + " " + days[date.getMonth()];
}

export function isFilePath(value) {
  // Regular expression to check if the value resembles a file path
  const filePathRegex = /^([a-zA-Z]:)?(\\[^<>:"/\\|?*]+)+\\?$/;
  return filePathRegex.test(value);
}

export async function copyToClipBoard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied to Clipboard!");
  } catch (err) {
    console.log("Failed to Copy!");
  }
}

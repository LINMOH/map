export const merge = (obj: { [key: string]: string }) => Object.entries(obj).flat().join(" ");

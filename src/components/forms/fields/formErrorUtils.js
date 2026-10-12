function collectMessages(value, fieldName = "") {
  if (typeof value === "string" && value.trim()) {
    const message = value.trim();
    return [fieldName ? `${fieldName}: ${message}` : message];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectMessages(item, fieldName));
  }

  if (!value || typeof value !== "object") {
    return [];
  }

  const message =
    typeof value.message === "string" ? value.message.trim() : "";
  const itemField =
    typeof value.field === "string"
      ? value.field
      : typeof value.name === "string"
        ? value.name
        : fieldName;

  if (message) {
    return [itemField ? `${itemField}: ${message}` : message];
  }

  if (value.errors) {
    return collectMessages(value.errors, itemField);
  }

  return Object.entries(value).flatMap(([key, item]) => {
    if (["field", "name", "type"].includes(key)) return [];

    const label = key
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (character) => character.toUpperCase());

    return collectMessages(item, label);
  });
}

export function getFormErrorMessages(error, fallback) {
  const data = error?.data;
  const fieldErrors = collectMessages(data?.errors);
  const messages = [
    ...fieldErrors,
    ...collectMessages(data?.message),
    ...collectMessages(data?.detail),
  ];

  if (messages.length === 0) {
    messages.push(...collectMessages(data?.title));
  }

  if (messages.length === 0) {
    messages.push(...collectMessages(error?.error));
    messages.push(...collectMessages(error?.message));
  }

  if (messages.length === 0 && Number.isInteger(error?.status)) {
    messages.push(`Request failed with status ${error.status}.`);
  }

  if (messages.length === 0 && fallback) {
    messages.push(fallback);
  }

  return [...new Set(messages)];
}

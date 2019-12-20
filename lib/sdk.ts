export function source(defaultSource: string): string {
  const query = new URLSearchParams(window.location.search);
  const source = query.get("source");

  if (source === null) {
    return defaultSource;
  }

  return source;
}

export function formDataToUrlSearchParams(formData: FormData): URLSearchParams {
  const params = new URLSearchParams();

  formData.forEach((val, key) => {
    params.set(key, val.valueOf().toString());
  });

  return params;
}

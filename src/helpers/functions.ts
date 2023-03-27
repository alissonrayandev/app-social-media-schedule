export function blobToBase64(blob: Blob | null) {
  return new Promise<string>((resolve) => {
    if (!blob) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result as string;
      resolve(base64data);
    };
  });
}

export function base64ToBlob(
  base64: string,
  type = "application/octet-stream"
) {
  const binStr = atob(base64.split(",")[1]);
  const len = binStr.length;
  const arr = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }
  return new Blob([arr], { type });
}

export async function urlToBlob(url: string): Promise<Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
}

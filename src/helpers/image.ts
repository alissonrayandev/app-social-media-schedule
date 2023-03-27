function resizeImageBase64(
  base64Image: string,
  maxWidth: number,
  maxHeight: number
) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = base64Image;
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return reject("Could not get canvas context");
      }
      ctx.drawImage(img, 0, 0, width, height);

      const resizedBase64 = canvas.toDataURL("image/jpeg", 0.7);
      resolve(resizedBase64);
    };
    img.onerror = (error) => reject(error);
  });
}

export default resizeImageBase64;

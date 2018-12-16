export const fileToImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const image = new Image();

    reader.onloadend = () => {
      image.src = reader.result;
      resolve(image);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

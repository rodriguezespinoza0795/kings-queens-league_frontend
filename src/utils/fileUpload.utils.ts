export const uploadFile = async (formData: FormData) => {
  const response = await fetch(`${import.meta.env.VITE_API}v1/upload`, {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  return data;
};

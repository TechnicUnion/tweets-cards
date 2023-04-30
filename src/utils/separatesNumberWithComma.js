export const separetesNumberWithComma = item => {
  const editFolovers = item.toString().split('');

  editFolovers.splice(editFolovers.length - 3, 0, ',').join('');

  return editFolovers;
};

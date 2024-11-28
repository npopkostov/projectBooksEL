export const mergeJsonFiles = async (firstJsonFile, secondJsonFile) => {
  const mergedJson = firstJsonFile.map((itemFromFirstJsonFile) => {
    const matchingItem = secondJsonFile.find(
      (itemFromSecondJsonFile) => itemFromSecondJsonFile.id === itemFromFirstJsonFile.id
    );

    if (matchingItem) {
      return Object.assign({}, itemFromFirstJsonFile, matchingItem);
    }
  });
  console.log("Files are sucessfully merged");
  return mergedJson;
};

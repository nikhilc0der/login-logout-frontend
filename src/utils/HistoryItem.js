export default async function HistoryItem(historyArray, value) {
  try {
    await localStorage.setItem(value, JSON.stringify(historyArray));
  } catch (e) {
    console.log(
      "error occured while storing shortlist products in the async storage",
      e
    );
  }
}

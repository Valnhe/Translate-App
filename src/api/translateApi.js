
export default async function translateApi(firstLanguage, secondLanguage, text) {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${text}&langpair=${firstLanguage}|${secondLanguage}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
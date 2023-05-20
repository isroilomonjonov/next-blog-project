export const readingTime=(text?:string)=> {
    const wpm = 120;
    const words = text?.trim().split(/\s+/).length||1;
    const time = Math.ceil(words / wpm);
    return time

  }
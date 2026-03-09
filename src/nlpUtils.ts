import nlp from "compromise";

export function extractKeywords(text: string): string[] {
  const doc = nlp(text);
  const nouns = doc.nouns().out("array") as string[];
  return nouns.slice(0, 5);
}

export function summarizeText(text: string): string {
  const sentences = text.split(".");
  
  if (sentences.length <= 2) return text;

  return sentences.slice(0,2).join(".");
}
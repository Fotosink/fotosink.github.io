import { marked } from 'marked';

const extractContent = (markdown, headingText) => {
  const tokens = marked.lexer(markdown);
  const headingLevel = headingText.trim().split(' ')[0].length; // e.g., ### -> 3
  headingText = headingText.split(' ').slice(1).join(' ');
  let capture = false;
  let content = [];

  for (const token of tokens) {
    if (token.type === 'heading' && token.depth === headingLevel && token.text === headingText) {
      capture = true;
      continue;
    }
    if (capture && token.type === 'heading' && token.depth <= headingLevel) {
      break;
    }
    if (capture) {
      content.push(token);
    }
  }

  return content;
};

export function getHeading(md, heading) {
  const content = extractContent(md.rawContent(), heading);
  return content.length ? content.map(c => c.raw).join('\n') : '';
}

export function getHeadingArr(md, heading) {
  const content = extractContent(md.rawContent(), heading);
  return content.length ? content.map(c => c.raw) : [];
}

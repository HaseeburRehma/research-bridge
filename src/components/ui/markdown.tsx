import { Fragment } from 'react';

/** Renders inline `**bold**`, `*italic*` and `` `code` `` within a line. */
function inline(text: string, keyPrefix: string) {
  const tokens = text.split(/(\*\*[^*]+\*\*|(?<!\*)\*[^*]+\*(?!\*)|`[^`]+`)/g);
  return tokens.filter(Boolean).map((token, i) => {
    const key = `${keyPrefix}-${i}`;
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={key} className="font-semibold text-ink-900">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith('`') && token.endsWith('`')) {
      return (
        <code
          key={key}
          className="rounded bg-paper-200 px-1.5 py-0.5 font-mono text-[0.85em] text-ink-800"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    if (token.startsWith('*') && token.endsWith('*')) {
      return (
        <em key={key} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }
    return <Fragment key={key}>{token}</Fragment>;
  });
}

/**
 * Small purpose-built renderer for the article bodies in `content/blog.ts`.
 * Supports `##`/`###` headings, paragraphs, `-` bullet lists, `1.` ordered
 * lists and `>` blockquotes — everything the articles actually use.
 */
export function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n{2,}/);

  return (
    <div className="space-y-6">
      {blocks.map((block, bi) => {
        const key = `b${bi}`;
        const lines = block.split('\n');

        if (block.startsWith('## ')) {
          return (
            <h2
              key={key}
              className="!mt-14 scroll-mt-32 font-display text-[1.65rem] leading-snug text-ink-900 md:text-[1.9rem]"
            >
              {inline(block.slice(3), key)}
            </h2>
          );
        }

        if (block.startsWith('### ')) {
          return (
            <h3 key={key} className="!mt-10 font-display text-[1.3rem] leading-snug text-ink-900">
              {inline(block.slice(4), key)}
            </h3>
          );
        }

        if (block.startsWith('> ')) {
          return (
            <blockquote
              key={key}
              className="!my-10 border-l-2 border-brand-500 pl-6 font-display text-[1.25rem] italic leading-relaxed text-ink-800"
            >
              {inline(block.replace(/^> ?/gm, ''), key)}
            </blockquote>
          );
        }

        if (lines.every((l) => /^- /.test(l))) {
          return (
            <ul key={key} className="space-y-2.5 pl-1">
              {lines.map((line, li) => (
                <li key={`${key}-${li}`} className="flex gap-3.5 leading-[1.85] text-ink-600">
                  <span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand-400" />
                  <span>{inline(line.slice(2), `${key}-${li}`)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (lines.every((l) => /^\d+\. /.test(l))) {
          return (
            <ol key={key} className="space-y-3">
              {lines.map((line, li) => (
                <li key={`${key}-${li}`} className="flex gap-4 leading-[1.85] text-ink-600">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-[0.8rem] text-brand-700">
                    {li + 1}
                  </span>
                  <span>{inline(line.replace(/^\d+\.\s/, ''), `${key}-${li}`)}</span>
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={key} className="text-[1.0625rem] leading-[1.85] text-ink-600">
            {inline(block, key)}
          </p>
        );
      })}
    </div>
  );
}

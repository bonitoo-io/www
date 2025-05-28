import * as React from "react";
import { ShareButton } from "./ShareButton";
import { ArticleHeaderProps } from "./types";

import linkedin from "@images/social/linkedin.svg";

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  metadata,
  onShare,
}) => {
  return (
    <header
      className="flex flex-wrap gap-5 justify-between self-center max-w-full uppercase text-stone-400 w-[914px]"
      role="banner"
    >
      <div className="flex gap-6 items-center text-lg tracking-widest">
        <span className="self-stretch my-auto">{metadata.author}</span>
        <time
          dateTime={new Date(metadata.date).toISOString()}
          className="self-stretch my-auto"
        >
          {metadata.date}
        </time>
        <span className="self-stretch my-auto">{metadata.category}</span>
      </div>
      <ShareButton iconUrl={linkedin} label="share" onClick={onShare} />
    </header>
  );
};

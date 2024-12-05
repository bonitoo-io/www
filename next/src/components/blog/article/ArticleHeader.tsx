import * as React from "react";
import { ShareButton } from "./ShareButton";
import { ArticleHeaderProps } from "./types";

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
      <ShareButton
        iconUrl="https://cdn.builder.io/api/v1/image/assets/cc7a26f1efab4cffa3ef16cb13f9ff11/1037ad861431c47c02d2890980572a10485ddc7c1324b667c4807ea7cda62f5b?apiKey=cc7a26f1efab4cffa3ef16cb13f9ff11&"
        label="share"
        onClick={onShare}
      />
    </header>
  );
};

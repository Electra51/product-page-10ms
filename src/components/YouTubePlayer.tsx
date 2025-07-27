"use client"; // must be first line - tells Next.js this is a Client Component

import React from "react";
import YouTube from "react-youtube";

interface Props {
  videoId: string;
}

export default function YouTubePlayer({ videoId }: Props) {
  return <YouTube videoId={videoId} />;
}

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

const allowedFiles = new Map([
  ['documents/hse-policy.pdf', 'application/pdf'],
  ['videos/mining-video.mp4', 'video/mp4'],
  ['videos/mining-video-1.mp4', 'video/mp4'],
  ['videos/mining-video-2.mp4', 'video/mp4'],
]);

type RouteContext = {
  params: Promise<{
    kind: string;
    file: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { kind, file } = await context.params;
  const assetKey = `${kind}/${file}`;
  const contentType = allowedFiles.get(assetKey);

  if (!contentType) {
    return new NextResponse('Not found', { status: 404 });
  }

  const assetPath = path.join(
    process.cwd(),
    'src',
    'assets',
    'content',
    kind,
    file
  );
  const bytes = await readFile(assetPath);

  return new NextResponse(bytes, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

import Link from 'next/link';
import CardGrid from '@/components/CardGrid';
import { promises as fs } from 'fs';
import path from 'path';

export default async function HomePage() {
  const docsDir = process.env.PUB_HOME || 'content/docs';
  const indexPath = path.join(docsDir, process.env.INDEX_FILE || '_index.json');
  const components = JSON.parse(await fs.readFile(indexPath, 'utf8'));

  return (
    <main className="flex flex-1 flex-col items-center p-8">
      <h1 className="mb-8 text-3xl font-bold">:: System Yellow Sheet ::</h1>
      <div className="w-full max-w-7xl">
        <CardGrid components={components} defaultTags={['sys']} />
      </div>
      <p className="mt-8 text-fd-muted-foreground">
        View complete{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          Recursos
        </Link>
      </p>
    </main>
  );
}

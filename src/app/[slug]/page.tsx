import Link from 'next/link';
import Image from 'next/image';
import ContactGrid from '@/components/ContactGrid';
import { getSubpageData } from './data';
import type { SubPage, ContactExtra } from '@/types/type';

type Props = { params: Promise<{ slug: string }> };

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const { pageData, extras }: {pageData: SubPage; extras: ContactExtra[] | null } = await getSubpageData(slug);

  const isGetInTouch = slug === 'get-in-touch';

  const pageColors: Record<string, string> = {
    'get-in-touch': 'bg-[#ffb472]',
    'maintainable': 'bg-[#bfddef]',
    'what-we-do': 'bg-[#abcfe6]'
  }

  const bgClass = pageColors[slug];

  return (
    <main className={`min-h-screen ${bgClass} p-10`}>

      <div className="mx-auto flex max-w-4xl items-center justify-center lg:justify-start px-4 py-6">
          <Link href="/">tilbage</Link>
      </div>
      
      <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr_auto] gap-6">

        <section className="relative lg:row-span-2 lg:col-start-1">
          <Image
            src={`/assets/images/sub/${pageData.img}`}
            alt={slug}
            width={800}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </section>

        <section className="lg:row-span-2 lg:col-start-2 grid grid-rows-2">

          <section className="row-start-1">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight">
              {pageData.header}
            </h1>
            <p className="whitespace-pre-line text-lg font-semibold leading-7">
              {pageData.text}
            </p>
          </section>

          {isGetInTouch && extras && extras.length > 0 &&
            <section className="flex items-center justify-center row-start-2">
              <div>
                <ContactGrid contacts={extras} />
              </div>
            </section>
          }

        </section>
      </div>

    </main>
  );
}

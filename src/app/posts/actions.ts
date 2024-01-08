'use server';

import { unstable_noStore as noStore } from 'next/cache';

import { db } from '@/db';
import { Views, views } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function increment(slug: string) {
  noStore();

  await db
    .insert(views)
    .values({ slug: slug, count: 1 })
    .onConflictDoUpdate({
      target: views.slug,
      set: {
        count: 6,
      },
    });
}

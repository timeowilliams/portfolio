import { Hero } from '@/components/Hero';
import { Origin } from '@/components/Origin';
import { Bridges } from '@/components/Bridges';
import { Frameworks } from '@/components/Frameworks';
import { Philosophy } from '@/components/Philosophy';

export default function Home() {
  return (
    <>
      <Hero />
      <Origin />
      <Bridges />
      {/* <Frameworks /> */}
      <Philosophy />
    </>
  );
}

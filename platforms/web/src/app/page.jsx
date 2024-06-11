import Banner from '@/components/Banner'
import Card from '@/components/Card';
import CardGroup from '@/components/CardGroup';

export default function Home() {
  return (
   <> 
      <Banner />
      <div className='px-8 py-12'>
        <CardGroup />
      </div>
   </>
  );
}

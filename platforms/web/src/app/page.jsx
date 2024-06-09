import Banner from '@/components/Banner'
import Card from '@/components/Card';

export default function Home() {
  return (
   <> 
      <Banner />
      <div className='p-6'>
        <Card />
      </div>
   </>
  );
}

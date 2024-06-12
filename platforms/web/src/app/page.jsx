import Banner from '@/components/Banner'
// import Card from '@/components/Card';
import CardGroup from '@/components/CardGroup';


async function getData() {
  const data = await fetch('https://alvinsetyapranata.byte.biz.id/piringterbang/api/products/')
  return data.json()
}

export default async function Home() {
  const data = await getData()

  return (
   <> 
      <Banner />
      <div className='px-8 py-12'>
        <CardGroup data={data} />
      </div>
   </>
  );
}

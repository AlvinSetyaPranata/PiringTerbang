import Banner from '@/components/Banner'
// import Card from '@/components/Card';
import CardGroup from '@/components/CardGroup';
import CardGroupGrid from '@/components/CardGroupGrid';


async function getData() {
  const data = await fetch('https://alvinsetyapranata.byte.biz.id/piringterbang/api/products/', {next: {revalidate: 5000}})
  return data.json()
}

export default async function Home() {
  const data = await getData()

  return (
   <> 
      <Banner />
      <div className='px-8 py-12 flex flex-col gap-y-14'>
        <CardGroup data={data} title="Baru aja dimasak"/>
        <CardGroup data={data} title="Dimasak khusus untukmu"/>
        <CardGroupGrid data={data} title="Terlaris"/>
      </div>
   </>
  );
}

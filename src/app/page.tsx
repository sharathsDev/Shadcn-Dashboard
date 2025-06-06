
export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Card 1</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Card 2</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Card 3</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Card 4</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Card 5</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Card 6</div>
    </div>
  );
}

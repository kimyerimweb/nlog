export default function Stock({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Stock {params.id}</h1>
    </div>
  );
}
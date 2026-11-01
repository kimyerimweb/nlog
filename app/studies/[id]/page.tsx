export default function Study({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Study {params.id}</h1>
    </div>
  );
}
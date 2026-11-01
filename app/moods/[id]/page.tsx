export default function Mood({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Mood {params.id}</h1>
    </div>
  );
}
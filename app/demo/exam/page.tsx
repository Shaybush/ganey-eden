export default function Exam({ searchParams }: { searchParams: { count: number } }) {
  return <div>{searchParams.count}</div>;
}

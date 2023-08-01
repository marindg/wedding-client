import Sidebar from "@/components/sidebar";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

export default async function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();

  console.log(data);
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <main className="bg-red-200 w-full p-5">{children}</main>
    </div>
  );
}

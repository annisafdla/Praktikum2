// app/blog/[id]/[title]/page.tsx

interface PageProps {
  params: {
    id: string;
    title: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Blog Post Details
      </h1>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Title: {params.title.replace(/-/g, ' ')}
        </h2>
        
        <p className="text-lg mb-4">
          <strong>Post ID:</strong> {params.id}
        </p>
        
        <p className="text-lg mb-4">
          <strong>URL Title:</strong> {params.title}
        </p>
        
        <div className="mt-6 p-4 bg-white rounded border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold mb-2">Content Preview</h3>
          <p className="text-gray-700">
            Ini adalah halaman blog dengan ID {params.id} dan judul "{params.title.replace(/-/g, ' ')}". 
            Dynamic routing memungkinkan kita mengakses kedua parameter ini melalui URL.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h4 className="font-semibold text-yellow-800 mb-2">URL Parameters:</h4>
        <ul className="text-yellow-700">
          <li>• ID: {params.id}</li>
          <li>• Title: {params.title}</li>
        </ul>
      </div>
    </div>
  );
}
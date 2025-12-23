'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface APIEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  parameters?: { name: string; type: string; required: boolean; description: string }[];
  response: string;
}

interface APIDocProps {
  title: string;
  baseUrl: string;
  endpoints: APIEndpoint[];
}

export function APIDoc({ title, baseUrl, endpoints }: APIDocProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'POST': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'PUT': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'DELETE': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">Base URL: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{baseUrl}</code></p>
      </div>

      {endpoints.map((endpoint, index) => (
        <div key={index} className="border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className={`px-2 py-1 rounded text-sm font-medium ${getMethodColor(endpoint.method)}`}>
              {endpoint.method}
            </span>
            <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded flex-1">{endpoint.path}</code>
            <button
              onClick={() => copyToClipboard(`${baseUrl}${endpoint.path}`, index)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            >
              {copiedIndex === index ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <p className="text-gray-700 dark:text-gray-300">{endpoint.description}</p>

          {endpoint.parameters && (
            <div>
              <h4 className="font-medium mb-2">Parameters:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Type</th>
                      <th className="text-left p-2">Required</th>
                      <th className="text-left p-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endpoint.parameters.map((param, paramIndex) => (
                      <tr key={paramIndex} className="border-b">
                        <td className="p-2 font-mono">{param.name}</td>
                        <td className="p-2 text-blue-600 dark:text-blue-400">{param.type}</td>
                        <td className="p-2">{param.required ? '✓' : '○'}</td>
                        <td className="p-2">{param.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium mb-2">Response:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm">
              <code>{endpoint.response}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, Key, Code, Webhook, ChevronRight, Copy, ExternalLink } from 'lucide-react';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const navigation = [
    { id: 'introduction', icon: Book, title: 'Introduction', subsections: ['Getting Started', 'Quick Start'] },
    { id: 'authentication', icon: Key, title: 'Authentication', subsections: ['API Keys', 'OAuth 2.0'] },
    { id: 'api-overview', icon: Code, title: 'API Overview', subsections: ['Endpoints', 'Rate Limits', 'Errors'] },
    { id: 'webhooks', icon: Webhook, title: 'Webhooks', subsections: ['Setup', 'Events', 'Security'] }
  ];

  const codeExamples = {
    authentication: `// Initialize FlowTask API client
const FlowTask = require('flowtask-sdk');

const client = new FlowTask({
  apiKey: 'your_api_key_here',
  environment: 'production'
});

// Make authenticated request
const response = await client.tasks.list({
  status: 'active',
  limit: 10
});`,
    createTask: `// Create a new task
const task = await client.tasks.create({
  title: 'Complete project documentation',
  description: 'Write comprehensive API docs',
  priority: 'high',
  assignee: 'user@example.com',
  dueDate: '2025-12-31'
});

console.log('Task created:', task.id);`,
    webhook: `{
  "event": "task.completed",
  "timestamp": "2025-12-27T10:30:00Z",
  "data": {
    "task_id": "tsk_123456",
    "title": "Complete project documentation",
    "completed_by": "user@example.com",
    "completed_at": "2025-12-27T10:30:00Z"
  }
}`
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-6 transition-colors duration-300">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Documentation</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">API Reference & Guides</p>
              </div>

              <nav className="space-y-1">
                {navigation.map((section) => {
                  const Icon = section.icon;
                  return (
                    <div key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset ${activeSection === section.id
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{section.title}</span>
                      </button>

                      {activeSection === section.id && section.subsections && (
                        <div className="ml-8 mt-1 space-y-1">
                          {section.subsections.map((subsection) => (
                            <a
                              key={subsection}
                              href={`#${subsection.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            >
                              {subsection}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Support Link */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <Link to="/support" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1">
                  <ExternalLink className="w-4 h-4" />
                  Need Help?
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              {/* Introduction Section */}
              {activeSection === 'introduction' && (
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                    Introduction
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Welcome to the FlowTask API documentation. This guide will help you integrate FlowTask's powerful task management features into your applications.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                    <h3 className="font-bold text-blue-900 mb-2">Base URL</h3>
                    <code className="text-blue-700 font-mono text-sm">https://api.flowtask.com/v1</code>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Getting Started</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To get started with the FlowTask API, you'll need to:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                    <li>Create a FlowTask account</li>
                    <li>Generate an API key from your dashboard</li>
                    <li>Install the SDK or make direct HTTP requests</li>
                    <li>Start building!</li>
                  </ol>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Quick Start</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Here's a simple example to create your first task:
                  </p>

                  <div className="relative">
                    <button className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
                      <code className="text-sm font-mono">{codeExamples.createTask}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Authentication Section */}
              {activeSection === 'authentication' && (
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                    Authentication
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    FlowTask API uses API keys to authenticate requests. You can view and manage your API keys in your dashboard settings.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-8">
                    <h3 className="font-bold text-yellow-900 mb-2">⚠️ Security Note</h3>
                    <p className="text-yellow-800 text-sm">Keep your API keys secure and never share them publicly. Treat them like passwords.</p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">API Keys</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Include your API key in the request headers:
                  </p>

                  <div className="relative mb-8">
                    <button className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
                      <code className="text-sm font-mono">{codeExamples.authentication}</code>
                    </pre>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">OAuth 2.0</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    For third-party integrations, FlowTask supports OAuth 2.0 authentication flow:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Authorization endpoint: <code className="text-sm bg-gray-100 px-2 py-1 rounded">/oauth/authorize</code></li>
                    <li>Token endpoint: <code className="text-sm bg-gray-100 px-2 py-1 rounded">/oauth/token</code></li>
                    <li>Supported grant types: authorization_code, refresh_token</li>
                  </ul>
                </div>
              )}

              {/* API Overview Section */}
              {activeSection === 'api-overview' && (
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                    API Overview
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    The FlowTask API is organized around REST principles with predictable resource-oriented URLs.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Endpoints</h2>
                  <div className="space-y-4 mb-8">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded font-mono text-sm font-semibold">GET</span>
                        <code className="font-mono text-gray-900">/tasks</code>
                      </div>
                      <p className="text-gray-600 text-sm">List all tasks</p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-mono text-sm font-semibold">POST</span>
                        <code className="font-mono text-gray-900">/tasks</code>
                      </div>
                      <p className="text-gray-600 text-sm">Create a new task</p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded font-mono text-sm font-semibold">PUT</span>
                        <code className="font-mono text-gray-900">/tasks/:id</code>
                      </div>
                      <p className="text-gray-600 text-sm">Update a task</p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded font-mono text-sm font-semibold">DELETE</span>
                        <code className="font-mono text-gray-900">/tasks/:id</code>
                      </div>
                      <p className="text-gray-600 text-sm">Delete a task</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Rate Limits</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To ensure fair usage, we enforce rate limits on API requests:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                    <li>Free tier: 100 requests per hour</li>
                    <li>Pro tier: 1,000 requests per hour</li>
                    <li>Enterprise tier: Unlimited with fair use policy</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Errors</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    FlowTask uses conventional HTTP response codes:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm space-y-2">
                    <div><span className="text-green-600">200</span> - OK</div>
                    <div><span className="text-blue-600">201</span> - Created</div>
                    <div><span className="text-yellow-600">400</span> - Bad Request</div>
                    <div><span className="text-orange-600">401</span> - Unauthorized</div>
                    <div><span className="text-red-600">404</span> - Not Found</div>
                    <div><span className="text-red-600">500</span> - Server Error</div>
                  </div>
                </div>
              )}

              {/* Webhooks Section */}
              {activeSection === 'webhooks' && (
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                    Webhooks
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Webhooks allow you to receive real-time notifications when events occur in your FlowTask workspace.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Setup</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Configure webhooks in your dashboard settings by providing:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                    <li>Webhook URL endpoint</li>
                    <li>Events to subscribe to</li>
                    <li>Optional secret for signature verification</li>
                  </ol>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Events</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Available webhook events:
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {['task.created', 'task.updated', 'task.completed', 'task.deleted', 'project.created', 'user.invited'].map((event) => (
                      <div key={event} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                        <code className="text-sm font-mono text-gray-900">{event}</code>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Payload Example</h2>
                  <div className="relative">
                    <button className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
                      <code className="text-sm font-mono">{codeExamples.webhook}</code>
                    </pre>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-8">
                    <h3 className="font-bold text-green-900 mb-2">Security</h3>
                    <p className="text-green-800 text-sm">Verify webhook signatures using the provided secret to ensure requests are from FlowTask.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;

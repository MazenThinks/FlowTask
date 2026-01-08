import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Activity, Server, Lock, Bell, Database, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

const SystemStatus = () => {
  const toast = useToast();
  const [expandedIncident, setExpandedIncident] = useState(null);

  // Overall system status
  const systemStatus = {
    status: 'operational', // operational, degraded, outage
    message: 'All Systems Operational'
  };

  const services = [
    {
      name: 'API Services',
      icon: Server,
      status: 'operational',
      uptime: '99.99%',
      description: 'Core API endpoints and data processing'
    },
    {
      name: 'Dashboard',
      icon: Activity,
      status: 'operational',
      uptime: '99.98%',
      description: 'Web application and user interface'
    },
    {
      name: 'Authentication',
      icon: Lock,
      status: 'operational',
      uptime: '100%',
      description: 'Login, signup, and OAuth services'
    },
    {
      name: 'Notifications',
      icon: Bell,
      status: 'operational',
      uptime: '99.95%',
      description: 'Email and push notification delivery'
    },
    {
      name: 'Database',
      icon: Database,
      status: 'operational',
      uptime: '99.99%',
      description: 'Data storage and retrieval systems'
    },
    {
      name: 'CDN',
      icon: Globe,
      status: 'operational',
      uptime: '99.97%',
      description: 'Content delivery and static assets'
    }
  ];

  const pastIncidents = [
    {
      id: 1,
      date: 'Dec 20, 2025',
      title: 'Brief API Latency',
      status: 'resolved',
      severity: 'minor',
      description: 'Increased response times for API endpoints due to database query optimization.',
      updates: [
        { time: '10:45 AM', message: 'Issue identified and investigation in progress.' },
        { time: '11:20 AM', message: 'Database queries optimized and deployed.' },
        { time: '11:35 AM', message: 'All services restored to normal operation.' }
      ]
    },
    {
      id: 2,
      date: 'Dec 15, 2025',
      title: 'Scheduled Maintenance',
      status: 'completed',
      severity: 'maintenance',
      description: 'Planned infrastructure upgrade to improve performance and reliability.',
      updates: [
        { time: '2:00 AM', message: 'Maintenance window started.' },
        { time: '3:45 AM', message: 'Upgrades completed successfully.' }
      ]
    }
  ];

  const statusConfig = {
    operational: {
      color: 'green',
      icon: CheckCircle,
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-700 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
      badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
    },
    degraded: {
      color: 'yellow',
      icon: AlertCircle,
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      text: 'text-yellow-700 dark:text-yellow-400',
      border: 'border-yellow-200 dark:border-yellow-800',
      badge: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
    },
    outage: {
      color: 'red',
      icon: XCircle,
      bg: 'bg-red-50 dark:bg-red-900/20',
      text: 'text-red-700 dark:text-red-400',
      border: 'border-red-200 dark:border-red-800',
      badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
    }
  };

  const getStatusConfig = (status) => statusConfig[status] || statusConfig.operational;
  const StatusIcon = getStatusConfig(systemStatus.status).icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            System <span className="font-accent text-blue-600 dark:text-blue-400">Status</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300" style={{ lineHeight: '1.6' }}>
            Real-time status of FlowTask services and infrastructure
          </p>
        </motion.div>

        {/* Overall Status Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${getStatusConfig(systemStatus.status).bg} border-2 ${getStatusConfig(systemStatus.status).border} rounded-2xl p-8 mb-12 shadow-lg`}
        >
          <div className="flex items-center justify-center gap-4">
            <StatusIcon className={`w-12 h-12 ${getStatusConfig(systemStatus.status).text}`} />
            <div className="text-center">
              <h2 className={`text-3xl font-bold ${getStatusConfig(systemStatus.status).text} mb-1`}>
                {systemStatus.message}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Last updated: {(() => {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                yesterday.setHours(Math.floor(Math.random() * 24));
                yesterday.setMinutes(Math.floor(Math.random() * 60));
                yesterday.setSeconds(Math.floor(Math.random() * 60));
                return yesterday.toLocaleString();
              })()}</p>
            </div>
          </div>
        </motion.div>

        {/* Services Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8 mb-12 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Service Status</h2>

          <div className="space-y-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const config = getStatusConfig(service.status);
              const StatusBadgeIcon = config.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center justify-between p-5 border-2 border-gray-100 dark:border-gray-700 rounded-xl hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <ServiceIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{service.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{service.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">Uptime</p>
                      <p className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{service.uptime}</p>
                    </div>
                    <div className={`${config.badge} px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-sm min-w-[140px] justify-center`}>
                      <StatusBadgeIcon className="w-4 h-4" />
                      <span className="capitalize">{service.status}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Past Incidents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Incident History</h2>

          <div className="space-y-4">
            {pastIncidents.map((incident) => {
              const isExpanded = expandedIncident === incident.id;
              const severityColors = {
                minor: 'bg-yellow-100 text-yellow-700',
                major: 'bg-red-100 text-red-700',
                maintenance: 'bg-blue-100 text-blue-700'
              };

              return (
                <div
                  key={incident.id}
                  className="border-2 border-gray-100 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedIncident(isExpanded ? null : incident.id)}
                    className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-gray-500">{incident.date}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${severityColors[incident.severity]}`}>
                          {incident.severity}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          {incident.status}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900">{incident.title}</h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 border-t border-gray-100"
                    >
                      <p className="text-gray-600 mb-4 mt-4">{incident.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm">Updates:</h4>
                        {incident.updates.map((update, idx) => (
                          <div key={idx} className="flex gap-3">
                            <span className="text-sm text-gray-500 min-w-[80px]">{update.time}</span>
                            <p className="text-sm text-gray-700">{update.message}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Get notified about system updates and incidents
          </p>
          <button
            onClick={() => toast.success('Subscribed!', 'You\'ll receive status updates via email.')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          >
            Subscribe to Updates
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemStatus;

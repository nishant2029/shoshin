import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import AnnouncementCard from './components/AnnouncementCard';
import ScheduleCard from './components/ScheduleCard';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Available Position"
              value={24}
              subtitle="4 Urgently needed"
              trend="+4"
              trendColor="text-green-500"
            />
            <StatCard
              title="Job Open"
              value={10}
              subtitle="4 Active today"
              trend="+4"
              trendColor="text-green-500"
            />
            <StatCard
              title="New Employees"
              value={24}
              subtitle="4 Department"
              trend="+4"
              trendColor="text-green-500"
            />
            <StatCard
              title="Total Employees"
              value={216}
              subtitle="+2% than last month"
              trend="+12"
              trendColor="text-green-500"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <AnnouncementCard />
            </div>
            <div>
              <ScheduleCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
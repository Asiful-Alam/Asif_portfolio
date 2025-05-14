import { FaUsers, FaBullhorn, FaTrophy, FaChartLine } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUsers className="text-white text-3xl" />,
    value: '20+',
    label: 'TEAM MEMBER',
  },
  {
    icon: <FaBullhorn className="text-white text-3xl" />,
    value: '20+',
    label: 'COMPLETE PROJECT',
  },
  {
    icon: <FaTrophy className="text-white text-3xl" />,
    value: '20+',
    label: 'WINNING AWARD',
  },
  {
    icon: <FaChartLine className="text-white text-3xl" />,
    value: '20+',
    label: 'CLIENT REVIEW',
  },
];

const StatsSection = () => {
  return (
    <section className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="uppercase text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

import DashboardLayout from "../../components/erp/parent/DashboardLayout";

import StudentHeader from "../../components/erp/parent/StudentHeader";
import SummaryCards from "../../components/erp/parent/SummaryCards";
import PerformanceChart from "../../components/erp/parent/PerformanceChart";
import AllInsights from "../../components/erp/parent/AllInsights";
import RecentActivity from "../../components/erp/parent/RecentActivity";
import QuickActions from "../../components/erp/parent/QuickActions";

const ParentDashboard = () => {

return (

<DashboardLayout>

<div className="space-y-8 max-w-7xl mx-auto">

<StudentHeader />

<SummaryCards />

{/* Performance + AI insights */}

<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<PerformanceChart />

<AllInsights />

</section>

{/* Activity + actions */}

<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">

<RecentActivity />

<QuickActions />

</section>

</div>

</DashboardLayout>

);

};

export default ParentDashboard;
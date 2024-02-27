import Card from "../components/dashboard/card/Card"
import Chart from "../components/dashboard/chart/Chart"
import Notifications from "../components/dashboard/notifications/Notifications"
import Transactions from "../components/dashboard/transactions/Transactions"

export default function Dashboard() {
  return (
    <div className="gap-4 flex">
      <div className="flex-4">
        <div className="gap-3 flex">
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Transactions />
        </div>
        <div>
          <Chart />
        </div>
      </div>
      <div className="flex-1">
        <Notifications />
      </div>
    </div>
  )
}
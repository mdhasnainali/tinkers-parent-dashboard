import {
  XYPlot,
  RadialChart,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  GradientDefs,
  Hint,
} from "react-vis";

import { ReactComponent as DashboardIcon } from "./lib/icons/dashboard.svg";
import { ReactComponent as ClassesIcon } from "./lib/icons/classes.svg";
import { ReactComponent as PaymentIcon } from "./lib/icons/payment.svg";
import { ReactComponent as ClockIcon } from "./lib/icons/clock.svg";
import { ReactComponent as SearchIcon } from "./lib/icons/search.svg";
import { ReactComponent as NotificationIcon } from "./lib/icons/notification.svg";
import { ReactComponent as ChartIcon } from "./lib/icons/chart.svg";
import worm from "./lib/images/worm.png";
import ufo from "./lib/images/ufo.png";
import avatar from "./lib/images/avatar.png";
import Card from "./lib/components/card";
import clsx from "clsx";

const navItems = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Classes",
    icon: ClassesIcon,
  },
  {
    label: "Payment",
    icon: PaymentIcon,
  },
];

function App() {
  return (
    <div className="flex">
      <nav
        id="sidebar"
        role="navigation"
        className="sticky top-0 left-0 h-screen w-60 bg-primary overflow-hidden"
      >
        <div className="px-6 py-9">
          <h1 className="text-white text-2xl">Amar Vasha</h1>

          <div className="flex flex-col items-stretch gap-4">
            {navItems.map((item) => {
              const clz = clsx(
                "text-white p-4 flex gap-2 items-center",
                item.label === "Dashboard" &&
                  "bg-white -mr-8 rounded-l-full text-primary"
              );
              return (
                <button key={item.label} className={clz}>
                  <item.icon />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="px-10 flex-1">
        <header className="bg-white h-14 rounded-b-lg shadow-lg shadow-black/5 flex items-center gap-8 p-8">
          <h3 className="text-primary my-0 font-bold">Welcome to Amar Vasha</h3>
          <div className="flex-1" />
          <div className="flex items-center gap-4 border border-text-gray rounded-md px-4 py-1 w-80 text-sm text-text-gray">
            <SearchIcon />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="flex-1 focus:outline-none"
            />
          </div>
          <NotificationIcon />
          <img src={avatar} alt="Avatar" />
        </header>

        <section className="mt-5">
          <div className="flex flex-wrap justify-between">
            <Card border className="flex flex-wrap gap-4 items-center">
              <RadialChart
                getAngle={(d) => d.angle}
                data={[
                  { angle: 70, color: "url(#rGrad)" },
                  { angle: 30, color: "#FAA9C6" },
                ]}
                stroke={"transparent"}
                innerRadius={50}
                radius={60}
                width={120}
                height={120}
                colorType={"literal"}
                colorDomain={[0, 100]}
                colorRange={[0, 10]}
              >
                {/* @ts-ignore */}
                <Hint
                  value={{ angle: 70 }}
                  align={{ horizontal: "center", vertical: "center" }}
                  style={{
                    inset: "50% auto auto 50%",
                    transform: "translateY(-50%) translateX(-50%)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <p className="text-custom-purple font-bold">70%</p>
                  </div>
                </Hint>
                <GradientDefs>
                  <linearGradient id="rGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FD749B" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0F296D" stopOpacity={1} />
                  </linearGradient>
                </GradientDefs>
              </RadialChart>
              <div>
                <h4 className="font-bold text-text-gray">Current Grade</h4>
                <h3 className="my-0 text-custom-purple font-bold">T1</h3>
                <div className="flex items-end gap-4">
                  <p className="my-0">22.8%</p>
                  <ChartIcon />
                </div>
              </div>
            </Card>
            <Card border className="flex flex-wrap gap-4 items-center">
              <RadialChart
                getAngle={(d) => d.angle}
                data={[
                  { angle: 50, color: "url(#rGrad)" },
                  { angle: 50, color: "#FAA9C6" },
                ]}
                innerRadius={50}
                radius={60}
                width={120}
                height={120}
                colorType={"literal"}
                colorDomain={[0, 100]}
                colorRange={[0, 10]}
                stroke={"transparent"}
              >
                {/* @ts-ignore */}
                <Hint
                  value={{ angle: 50 }}
                  align={{ horizontal: "center", vertical: "center" }}
                  style={{
                    inset: "50% auto auto 50%",
                    transform: "translateY(-50%) translateX(-50%)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <p className="text-custom-purple font-bold">50%</p>
                  </div>
                </Hint>
                <GradientDefs>
                  <linearGradient id="rGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FD749B" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0F296D" stopOpacity={1} />
                  </linearGradient>
                </GradientDefs>
              </RadialChart>
              <div>
                <h4 className="font-bold text-text-gray">Current Level</h4>
                <h3 className="my-0 text-custom-purple font-bold">1</h3>
                <div className="flex items-end gap-4">
                  <p className="my-0">11.8%</p>
                  <ChartIcon />
                </div>
              </div>
            </Card>
            <Card border className="flex flex-wrap gap-4 items-center">
              <ClockIcon />
              <div className="divide-y prose-h3:my-0 prose-h3:text-base flex flex-col gap-3">
                <div>
                  <h3 className="font-bold text-text-gray">
                    Current Learning Outcome
                  </h3>
                  <h3>Writing flower names</h3>
                </div>
                <div>
                  <h3 className="font-bold text-text-gray">
                    Current Learning Outcome
                  </h3>
                  <h3>Writing flower names</h3>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-8">
          <Card shadow="lg" className="flex flex-col items-stretch gap-6">
            <div className="flex items-center justify-between prose-h4:my-0">
              <h4>Last Class Status</h4>
              <h4 className="text-secondary">21 July 2021</h4>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-md p-4 text-center prose-h3:font-extrabold">
                <h3 className="my-0 text-primary">80%</h3>
                <h4 className="my-0">Effort</h4>
              </div>
              <div className="bg-gray-100 rounded-md p-4 text-center prose-h3:font-extrabold">
                <h3 className="my-0 text-primary">80%</h3>
                <h4 className="my-0">Effort</h4>
              </div>
              <div className="bg-gray-100 rounded-md p-4 text-center prose-h3:font-extrabold">
                <h3 className="my-0 text-primary">80%</h3>
                <h4 className="my-0">Effort</h4>
              </div>
            </div>
            <div className="bg-gray-100 rounded-md py-6 px-10 text-center prose-h3:font-extrabold flex items-center justify-between gap-12 relative overflow-hidden">
              <h4 className="my-0 relative">Learning Outcome Archived Rate</h4>
              <h3 className="my-0 relative text-primary">78%</h3>
              <span className="absolute top-0 left-0 h-full w-6 bg-secondary" />
            </div>
          </Card>
          <Card shadow="lg" className="flex flex-col items-stretch gap-2">
            <div className="flex items-center justify-between prose-h4:my-2">
              <h4>Competency Progress</h4>
              <h4 className="text-text-gray text-sm">
                All information in percentage(%)
              </h4>
            </div>
            <div className="flex items-stretch gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded bg-[#F1554C]" />
                  <div>
                    <h4 className="my-0">Listening</h4>
                    <h5 className="text-text-gray my-0 text-sm">Performance</h5>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded bg-[#1C45B0]" />
                  <div>
                    <h4 className="my-0">Speaking</h4>
                    <h5 className="text-text-gray my-0 text-sm">Performance</h5>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded bg-[#FEA5A0]" />
                  <div>
                    <h4 className="my-0">Reading</h4>
                    <h5 className="text-text-gray my-0 text-sm">Performance</h5>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded bg-[#E36C96]" />
                  <div>
                    <h4 className="my-0">Writing</h4>
                    <h5 className="text-text-gray my-0 text-sm">Performance</h5>
                  </div>
                </div>
              </div>

              <XYPlot width={300} height={200} stackBy="y">
                <HorizontalGridLines
                  tickTotal={4}
                  tickValues={[35, 55, 75, 100]}
                />
                <XAxis hideTicks />
                <YAxis tickValues={[0, 35, 55, 75, 100]} hideLine />
                <VerticalBarSeries
                  barWidth={0.4}
                  colorType={"literal"}
                  colorDomain={[0, 100]}
                  colorRange={[0, 10]}
                  data={[
                    { x: 2, y: 100, color: "#F1554C" },
                    { x: 4, y: 55, color: "#1C45B0" },
                    { x: 6, y: 75, color: "#FEA5A0" },
                    { x: 8, y: 60, color: "#E36C96" },
                  ]}
                />
              </XYPlot>
            </div>
          </Card>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-8 mb-5">
          <Card
            shadow="lg"
            className="bg-[#FFEBF9] flex items-stretch relative"
          >
            <div className="flex-3 flex flex-col items-center gap-6 relative">
              <h2 className="my-0 text-primary mb-3">Next Class</h2>
              <h3 className="my-0 text-custom-purple-dark">Learning Outcome</h3>
              <h4 className="my-0">Writing Rivers Name</h4>
            </div>
            <div className="bg-white flex-2 flex flex-col items-center gap-16 absolute top-0 right-0 h-full p-6">
              <h2 className="my-0 text-custom-purple font-semibold">
                21 July 2021
              </h2>
              <img src={worm} alt="Worm" />
            </div>
          </Card>
          <Card shadow="lg" className="flex items-stretch justify-between">
            <div className="grid place-items-center">
              <img src={ufo} alt="Worm" className="h-3/4 w-auto my-0" />
            </div>
            <div className="flex-3 flex flex-col items-center gap-6">
              <h2 className="my-0 text-custom-purple font-semibold">
                Vocabulary
              </h2>
              <h3 className="my-0 text-text-gray mb-3 font-bold">
                Last CLass Learning
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <span>??????????????????</span>
                <span>????????????</span>
                <span>???????????????</span>
                <span>???????????????</span>
                <span>???????????????</span>
                <span>????????????</span>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;

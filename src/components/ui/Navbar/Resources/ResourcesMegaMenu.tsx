import ResourceCard from "./ResourceCard";
import ResourceSidebarCard from "./ResourceSidebarCard";


export default function ResourcesMegaMenu() {
  return (
    <div className="grid grid-cols-5 gap-6 items-stretch">
      {/* LEFT 4 CARDS */}
      <div className="col-span-4 grid grid-cols-4 gap-6">
        <ResourceCard title="Blog" imgSrc="/assets/CompanyNav/company2.svg" />
        <ResourceCard title="Reports" imgSrc="/assets/products/product3.png" />
        <ResourceCard title="Podcast" imgSrc="/assets/CompanyNav/company1.svg" />
        <ResourceCard title="Webinars" imgSrc="/assets/products/product1.png" />
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="col-span-1 flex flex-col gap-3">
        <ResourceSidebarCard title="ROI Calculator">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white/60">
              <span>1,020</span>
              <span>HOURS</span>
            </div>
            <div className="flex justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white/60">
              <span>$7,500</span>
              <span>USD</span>
            </div>
          </div>
        </ResourceSidebarCard>

        <ResourceSidebarCard title="Reason Codes">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white/60">
            <input
              placeholder="Enter Code  1.27"
              className="bg-transparent outline-none flex-1 text-white/60"
            />
            <span className="ml-2">🔍</span>
          </div>
        </ResourceSidebarCard>
      </div>
    </div>
  );
}

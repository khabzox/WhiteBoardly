import { Sidebar } from "../_components/sidebar";
import { OrgSidebar } from "../_components/org-sidebar";
import { NavBar } from "../_components/navbar";
interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <OrgSidebar />
                    <div className="h-full flex-1">
                        <NavBar />
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

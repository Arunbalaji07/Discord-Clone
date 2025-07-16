import { Menu } from 'lucide-react';

import NavigationSidebar from '@/components/navigation/navigation-sidebar';
import ServerSidebar from '@/components/server/server-sidebar';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const MobileToggle = ({ serverId }: { serverId: string }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className={`md:hidden`}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className={`p-0 flex flex-row gap-0`}>
				<SheetTitle className={`sr-only`}>menu</SheetTitle>
				<div className={`w-[72px]`}>
					<NavigationSidebar />
				</div>
				<ServerSidebar serverId={serverId}  />
			</SheetContent>
		</Sheet>
	);
};

export default MobileToggle;

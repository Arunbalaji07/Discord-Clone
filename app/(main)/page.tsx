import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '@/components/mode-toggle';

const Home = () => {
	return (
		<div>
			<UserButton />
			<ModeToggle />
		</div>
	);
};

export default Home;
